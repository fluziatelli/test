'use strict';

yooxTestApp.controller('MainCtrl', function($scope,$location,$routeParams) {
	$location.path('/look/one');

	$scope.lookIds = [{
			"label" : "one",
			"id" : 1
		},{
			"label" : "two",
			"id" : 2
		},
		{
			"label" : "three",
			"id" : 3
		},
		{
			"label" : "four",
			"id" : 4
		}];

	

	$scope.open = function(item){
		$location.path('/look/'+item.label);
	};

	$scope.$watch(function(){
		return $routeParams.lookId;
	}, function(current){
				$scope.tabSelected = current;
				return true;
	});

});





