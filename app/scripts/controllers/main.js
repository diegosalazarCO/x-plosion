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

  	$scope.productPosts = [
  		{title: 'We Say No to Artificial Flavors',
  		description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  		imgName: 'img2.png'
  		},
  		{title: 'Xplosion is a Hit in Japan',
  		description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  		imgName: 'img3.png'
  		}
  	];

  	$scope.expansionPosts = [
  		{title: 'Say No to Artificial Xplosions',
  		description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  		imgName: 'img4.png'
  		},
  		{title: 'We Say to Colombial Flavors',
  		description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  		imgName: 'img5.png'
  		}
  	];

    $scope.submitForm = function(isValid) {
    	if (isValid) {
    		alert('Ok form');
    		this.user.name = ' ';
    	}
    };
  });
