'use strict';

/**
 * The main app module
 *
 * @type {angular.Module}
 */
const todoApp = angular.module('todoApp', ['ngRoute', 'firebase', 'ngMaterial']);

todoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/editableList", {
        templateUrl: 'templates/editableList-template.html',
        controller: 'EditableListCtrl',
    }).when("/staticList", {
        templateUrl: 'templates/staticList-template.html',
        controller: 'StaticListCtrl',
    }).otherwise({
        redirectTo: "/editableList"
    });
}]);