'use strict';

/**
 * Changes boolean value true/false to YES/NO
 */
angular.module('todoApp')
    .filter('changeBoolean', function() {
        return function(booleanValue) {
            if (booleanValue) {
                return "YES";
            }
            return "NO";
        };
    });