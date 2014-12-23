'use strict';

/**
 * @ngdoc function
 * @name memoramaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the memoramaApp
 */
angular.module('memoramaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
