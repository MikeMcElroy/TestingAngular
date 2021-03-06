angular.module("CodeExample2", ["CodeExample1"])
	.directive("person", function() {
		return {
			restrict: "A",
			template: "<div style=\"border-top:dashed 2px blue; margin-top:3px;padding-top:3px;\"><div><label>Name:</label> <span>{{person.name}}</span></div><div data-ng-show=\"person.address\"><label>Address:</label> <span>{{person.address}}</span></div><div data-ng-show=\"person.phone\"><label>Phone Number:</label> <span>{{person.phone}}</span></div></div>",
			replace:true
		};
	});