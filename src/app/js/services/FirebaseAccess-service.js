'use strict';

angular.module('todoApp')
    .factory('firebaseService', ['$firebaseArray', function ($firebaseArray) {
        function FirebaseService() {
            this.ref = firebase.database().ref();
            this.itemArray = $firebaseArray(this.ref.child('todos'));
        }

        /**
         * Gets todos records from firebase storage
         * @return {Promise}
         */
        FirebaseService.prototype.getTodos = function () {
            return this.itemArray;
        };

        /**
         * Creates new record in the firebase storage
         * @param {Object} todoEntry for the list
         */
        FirebaseService.prototype.addTodo = function (todoEntry) {
            this.itemArray.$add(todoEntry);
        };

        /**
         * Deletes record from firebase storage
         * @param {Integer} index of element to be deleted
         */
        FirebaseService.prototype.removeTodo = function (index) {
          this.itemArray.$remove(index);
        };

        /**
         * Updates record in firebase storage
         * @param {Object} item - object to be updated
         */
        FirebaseService.prototype.updateItem = function (item) {
          this.itemArray.$save(item);
        };



        return new FirebaseService();
    }]);