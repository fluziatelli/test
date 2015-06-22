(function(){
'use strict';

yooxTestApp.directive('imgPreloader', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var delay = 333;
            element.addClass('loading');

            scope.$watch(attrs.imgPreloader, function(value){
               if(typeof value == "undefined") return;

               var img = new Image();
               img.onload = function() {
			        setTimeout( function(){
                        element
                            .attr('src',value)
                            .removeClass('loading')
                            .addClass("loaded");
                    } , delay);
    			};
			    img.onerror = function() {
			        element.addClass('error');
			    };
			    img.src=value;
            });
        }
    };
});
})();
