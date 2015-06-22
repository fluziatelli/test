(function(){

'use strict';

yooxTestApp.controller('NewsCtrl', function($scope,$location,$anchorScroll) {

	$scope.gotoAnchor = function(id) {
		var newHash = id;
			if ($location.hash() !== newHash) {
		        $location.hash(id);

		    } else {
		        $anchorScroll();
		    }
		};

});

})();
