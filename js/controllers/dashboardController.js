(function () {
    'use strict';

    angular
        .module('app')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope' , '$stateParams' ,'$rootScope' , '$state'];

    function dashboardController( $scope , $stateParams , $rootScope , $state) {

     var userType = $stateParams.userType;

     if(userType == "admin"){

     $rootScope.adminPanel = true ;
     $state.go("app.createUser");

     }else{

     $rootScope.adminPanel = false ;
        $state.go("app.viewProject");
     }



    }

})();