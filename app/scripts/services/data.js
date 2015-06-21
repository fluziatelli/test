'use strict';

yooxTestApp.factory('Data',['$http',function($http) {
  	var Data = function(){};

  	Data.prototype.getByName = function(name) {
  		 return $http.get('data/' + name + '.json',{cache: true});
  	}
  	return new Data;
}]);
