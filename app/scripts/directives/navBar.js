'use strict';

/**
 * Simple Nav directive
 */
yooxTestApp.directive('navbar', ['$location', function($location) {
	  return {
	    restrict: 'A',
	    link: function postLink($scope, elem, attrs, controller) {
	      // Watch for the $location
	      $scope.$watch(function() {
	        return $location.path();
	      }, function(newValue, oldValue) {
	    	  
	         var pattern = elem.attr('data-match-route'),
	         	 regexp = new RegExp('^' + pattern + '$', ["i"]);
	          if(regexp.test(newValue)) {
	            elem.addClass('selected');
	          } else {
	            elem.removeClass('selected');
	          }
	        });
	    }
	  };
}]);