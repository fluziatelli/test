(function() {

    'use strict';

    yooxTestApp.controller('FormCtrl', function($scope) {

        $scope.onlyNumbers = /^\d+$/;


        $scope.submitForm = function(isValid) {
            $scope.submitted = true;
            // check to make sure the form is completely valid
            if (isValid) {
                alert('Thank you');
                //reset form
                $scope.submitted = false;


            }
        };

    });

})();
