

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
      	redirectTo: '/look/one'
      });

})

.run(function($rootScope, $location, $anchorScroll) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();
  });
})

.run(function($rootScope,$window){

    $rootScope.back = function(){
        $window.history.back();
    };


});
