'use strict';

angular
  .module('app')
  .controller('TaskCtrl', ['$scope', '$state', 'TaskService', function($scope,
      $state, TaskService) {
    $scope.tasks = [];
    function getTasks() {
      TaskService
        .find()
        .$promise
        .then(function(results) {
          $scope.tasks = results;
        });
    }
    getTasks();

    $scope.add = function() {
      TaskService
        .create($scope.newTask)
        .$promise
        .then(function(task) {
          $scope.newTask = '';
          $scope.taskForm.description.$setPristine();
          $('.description').focus();
          getTasks();
        });
    };

    $scope.remove = function(item) {
      TaskService
        .deleteById(item.id)
        .$promise
        .then(function() {
          getTasks();
        });
    };
  }]);
