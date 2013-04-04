angular.module("CodeExample2", ["CodeExample1"])
	.directive("person", function() {
		return {
			restrict: "A",
			templateUrl: "/sample2/_person.html",
			replace:true,
			scope: {
				person: "="
			}
		};
	});