(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope' ,'$location' ,'$stateParams' ,'$state'];

    function loginController( $scope , $location , $stateParams , $state) {


        $scope.login = function (){
             if($scope.user.userName == "admin"){
                $state.go('app.main' , {userType : "admin"});
             }else{
                $state.go('app.main' , {userType : "client"});
             }

        }

    }


})();