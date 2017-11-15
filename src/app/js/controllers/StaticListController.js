'use strict';

/**
 * The static list controller for the app. The controller:
 * - gets the model via the $firebaseArray service
 * - exposes the model to the template
 */

todoApp.controller('StaticListCtrl', function ($scope, $location, firebaseService) {

    firebaseService.getTodos().$loaded().then(function (arrayResponse) {
        $scope.items = arrayResponse;
    });

    /**
     * Copies list content to clip board which could be pasted as text later
     */
    $scope.copy = function () {
        let toClipboard = $scope.items.map(function (item) {
            return 'Name: ' + item.name + ', Description: ' + item.description + ', Done: ' + item.done
        }).join('\n');

        const textArea = document.createElement('textarea');
        textArea.value = toClipboard;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
});