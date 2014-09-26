'use strict';

angular
  .module('app', [
    'lbServices',
    'ui.router',
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
        $urlRouterProvider) {
      $stateProvider
        .state('task', {
          url: '',
          templateUrl: 'js/task/templates/task.html',
          controller: 'TaskCtrl'
        });
      $urlRouterProvider.otherwise('task');
    }
  ]);
