'use strict';

describe('Controller: OurProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('xplosionApp'));

  var OurProductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OurProductsCtrl = $controller('OurProductsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OurProductsCtrl.awesomeThings.length).toBe(3);
  });
});
