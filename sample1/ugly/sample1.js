var BaseURLs = {
	people: "/url/people/{0}",
	connectedPeople: "/url/people/{0}/connected"
};

/**
 *  PeopleLooker: A crappy app for finding people and who they're connected to!
 *  All rights reserved.
 *  Copy at your own risk.
 *  
 *  This is some ugly code.  Within it are global dependencies, copy-pasted logic, and just
 *  incompleteness of functionality.
**/

angular.module("CodeExample1", [])
	// A controller for PeopleLooker.
	.controller("PeopleController", ["$scope", "$http", function($scope, $http) {
		$scope.getPerson = function(id) {
			// TODO: Refactor this to a service
			// TODO: Dependency on global variable BaseURLs.
			// TODO: De-duplicate logic for finding the URL.
			$http.get(BaseURLs.people.replace(/\{0\}/g, id)).success(function(results) {
				$scope.person = results;
			}).error(function(reason) {
				$scope.showNoPerson = true;
			});
		};

		$scope.getConnectedPeople = function(id) {
			// TODO: Refactor this to a service
			// TODO: Dependency on global variable BaseURLs.
			// TODO: De-duplicate logic for finding the URL.
			$http.get(BaseURLs.connectedPeople.replace(/\{0\}/g, id)).success(function(results) {
				$scope.connectedPeople = results;
				if (results.length > 0) {
					$scope.noConnectedPeople = false;
				} else {
					$scope.noConnectedPeople = true;
				}
			}).error(function(reason) {
				$scope.noConnectedPeople = true;
			});
		};
		$scope.showNoPerson = false;

	}]);