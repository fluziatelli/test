(function() {

    'use strict';

    yooxTestApp.controller('NewsCtrl', function($scope, $location, $anchorScroll) {

        $scope.showme = true;

        $scope.gotoAnchor = function(id) {
            $scope.chiuso = $scope.showme;
            $scope.showme = !$scope.chiuso;
            var newHash = id;
            if ($location.hash() !== newHash) {
                $location.hash(id);
            } else {
                $anchorScroll();
            }
        };

    });

})();