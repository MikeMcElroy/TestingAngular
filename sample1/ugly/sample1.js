document.domain="localhost";
angular.module("CodeExample1", [])
	.controller("PeopleController", ["$scope", "$http", function($scope, $http) {
		$scope.getPerson = function(id) {
			$http.get("http://localhost:3001/url/people/" + id).success(function(results) {
				$scope.person = results;
			}).error(function(reason) {
				$scope.showNoPerson = true;
			});
		};

		$scope.showNoPerson = false;

	}]);