(function () {
    'use strict';

    angular
        .module('app')
        .factory('loginServices', loginServices);

    loginServices.$inject = ['$http'];

    function loginServices($http) {


        var service = {};

        service.login = login;
        service.register = register;
        service.registerClient = registerClient;


        return service;

        function register(user) {
            return $http({
                url: '/api/users/register',
                method: "POST",
                data: user,
                headers: { 'Content-Type': 'application/json' }
            }).then(handleSuccess, handleError('Error creating user'));
        }

        //login service
        function login(user) {

                      return $http({
                          url: '/api/users/login',
                          method: "POST",
                          data: user,
                          headers: { 'Content-Type': 'application/json' }
                      }).then(handleSuccess, handleError('Error creating user'));


        };

                function register(client) {
                    return $http({
                        url: '/api/users/registerClient',
                        method: "POST",
                        data: client,
                        headers: { 'Content-Type': 'application/json' }
                    }).then(handleSuccess, handleError('Error creating user'));
                }



        // UNDONE: Duplicate method on all services
        function handleSuccess(res) {
            return res;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }

    }
})();