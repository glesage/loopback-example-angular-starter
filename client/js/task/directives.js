'use strict';

angular
  .module('app')
  .directive('focus', function() {
    return {
      link: function(scope, element) {
        element.on('submit', function() {
          element.find().focus();
        });
        element[0].focus();

        if ( scope.isFocused ) {
          element.focus();
        }
      }
    };
  });
