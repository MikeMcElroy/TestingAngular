// avoid work in constructor, especially expensive work (such as network, file system access)

var UserListController = function($scope, $http) {
  // this is fine
  $scope.detailWindowCollapsed = true;

  // this sucks
  $http.get('/user/list').success(function(users) {
    $scope.users = users;
  });

  $scope.someHeavyLogic = function(a, b) {
    return a + b;
  };
};

angular.module('example1', []).controller('UserListController', UserListController);


describe('example1', function() {
  xit('should sum numbers', inject(function($controller, $httpBackend) {
    var scope = {};

    // I need to deal with xhr requests (or any other work in constructor) here,
    // even though I don't need it for this test
    $httpBackend.when('/user/list').respond([]);

    $controller('UserListController', {$scope: scope});

    expect(scope.someHeavyLogic(1, 2)).toBe(3);
  }));
});
