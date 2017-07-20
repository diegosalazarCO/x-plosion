'use strict';

/**
 * @ngdoc function
 * @name xplosionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xplosionApp
 */
angular.module('xplosionApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submitForm = function(isValid) {
    	if (isValid) {
    		alert('Ok form');
    		this.user.name = ' ';
    	}
    };
  });
