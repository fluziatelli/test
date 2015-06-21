'use strict';

 var yooxTestApp = angular.module('yooxTestApp', [ 
    "ngRoute"])

.config(function($httpProvider) {
    $httpProvider.defaults.cache = true;
})

.config(function($routeProvider) {
    
    $routeProvider
      .when('/look/:lookId', {
      	controller  : 'LookDetailCtrl',
      	templateUrl : 'views/look-detail.html'
      })
      .when('/look/:lookId/photo/:photoIndex', {
      	controller  : 'LookPhotoCtrl',
      	templateUrl : 'views/look-photo.html'
      })
      .otherwise({
      	redirectTo: '/'
      });

})
.run(function($rootScope,$window){

    $rootScope.back = function(){
        $window.history.back();
    };

});

