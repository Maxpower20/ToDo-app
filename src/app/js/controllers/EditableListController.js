'use strict';

/**
 * The editable list controller for the app. The controller:
 * - retrieves and persists the model via the $firebaseArray service
 * - exposes the model to the template and provides edit/delete functionality
 */

todoApp.controller('EditableListCtrl', function ($scope, $location, firebaseService) {

    $scope.newItem = {
        name: "",
        description: "",
        done: false
    };

    firebaseService.getTodos().$loaded().then(function (arrayResponse) {
        $scope.items = arrayResponse;
    });

    /**
     * Creates new record in list
     */
    $scope.create = function () {
        if ($scope.newItem.name && $scope.newItem.description !== undefined) {
            firebaseService.addTodo($scope.newItem);
        }
    };

    /**
     * Clears input values
     */
    $scope.clear = function () {
        $scope.newItem = {
            name: "",
            description: "",
            done: false
        };
    };

    /**
     * Updates record from list
     * @param item - record which needs to be updated
     */
    $scope.update = function (item) {
        firebaseService.updateItem(item);

    };

    /**
     * Deletes record from list
     * @param {Integer} index of element to be deleted
     */
    $scope.delete = function (index) {
        firebaseService.removeTodo(index);
    }



});