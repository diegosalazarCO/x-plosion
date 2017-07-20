'use strict';

describe('Controller: WhereToBuyCtrl', function () {

  // load the controller's module
  beforeEach(module('xplosionApp'));

  var WhereToBuyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhereToBuyCtrl = $controller('WhereToBuyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
