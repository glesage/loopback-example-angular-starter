'use strict';

angular
  .module('app')
  .service('TaskService', ['Task', function(Task) {
    function find() {
      return Task.find();
    }

    function create(obj) {
      return Task.create(obj);
    }

    function deleteById(itemId) {
      return Task.deleteById({id: itemId});
    }

    return {
      create: create,
      find: find,
      deleteById: deleteById,
    };
  }]);
