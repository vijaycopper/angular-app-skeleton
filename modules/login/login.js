(function () {

    'use strict';
    /**
     * @type module
     * @namespace app.login
     */

    angular
            .module('app.login', [])

            .config(['$stateProvider', function ($stateProvider) {
                    $stateProvider
                            .state('admin.login', {
                                url: '/login',
                                views: {
                                    'container@': {
                                        templateUrl: 'modules/login/login.html',
                                        controller: userLoginController
                                    }
                                }
                            })
                           
                    ;

                }])
            .controller('userLoginController', userLoginController)



            ;

    /**
     * 
     * @type Controller
     */
    userLoginController.$inject = [];
    function userLoginController() {

    }

})();