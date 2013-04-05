describe("PeopleLooker", function() {

	beforeEach(function() {
		module("CodeExample1");
	});

	describe("PeopleController", function() {

		it("should run", inject(function($controller, $rootScope, $http) {
			var scope = $rootScope.$new();
			$controller("PeopleController", { $scope: scope, $http: $http})

			expect(scope.showNoPerson).toBe(false);
		}));

		it("should create getPerson function on scope", inject(function($controller, $rootScope, $http) {
			var scope = $rootScope.$new();
			$controller("PeopleController", { $scope: scope, $http: $http})

			expect(scope.getPerson).not.toBe(undefined);
		}));

		it("should create getConnectedPerson function on scope", inject(function($controller, $rootScope, $http) {
			var scope = $rootScope.$new();
			$controller("PeopleController", { $scope: scope, $http: $http})

			expect(scope.getConnectedPeople).not.toBe(undefined);
		}));

		it("should get a person", inject(function($controller, $rootScope, $http, $httpBackend) {
			var scope = $rootScope.$new();
			$controller("PeopleController", { $scope: scope, $http: $http})

			$httpBackend.expectGET("/url/people/123").respond({id: "123", name: "Paul Paulenson", address: "123 Fake Street"});
			scope.getPerson(123);
			$httpBackend.flush();

			expect(scope.person).toEqual({id: "123", name: "Paul Paulenson", address: "123 Fake Street"});
		}));
	});
});