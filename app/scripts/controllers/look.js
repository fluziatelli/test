(function(){
'use strict';

yooxTestApp.controller('LookDetailCtrl',['$scope','Data','$routeParams','$log',
    function($scope,Data,$routeParams,$log){

        Data.getByName($routeParams.lookId).success(function(look) {
            look.item.lookId = $routeParams.lookId;
            $scope.look = look;
        }).error(function(response,status,header){
            $log.error(response);
        });
    }
])
.controller('LookPhotoCtrl',['$scope','Data','$routeParams','$log',
    function($scope,Data,$routeParams,$log){

        Data.getByName($routeParams.lookId).success(function(look) {
            $scope.lookImage = look.item.images[$routeParams.photoIndex - 1];
            $scope.look = look;
            $scope.page = $routeParams.lookId;
        }).error(function(response,status,header){
            $log.error(response);
        });

    }
]);
})();
