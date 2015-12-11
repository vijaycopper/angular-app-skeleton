(function () {
    'use strict';

    /**
     * @type module
     * @namespace app.dashboard
     */

    angular
            .module('app.dashboard', [])

            .config(['$stateProvider', function ($stateProvider) {
                    $stateProvider
                            .state('admin.dashboard', {
                                url: "/dashboard",
                                views: {
                                    'container@': {
                                        templateUrl: 'modules/dashboard/dashboard-tmpl.html',
                                        controller: 'dashboardController as dashboard'
                                    }
                                }
                            });

                }
            ])
            
            .controller('dashboardController', dashboardController)
            



            ;

    /**
     * 
     * @type Controller
     * @namespace dashboardController
     */
    dashboardController.$inject = ['$scope'];
    function dashboardController($scope) {
        var vm = this;
        vm.rowData = {
            changeList:"54878",
            owner: "vijay",
            timeStarted:"11/11/15",
            status: "pending",
            progress: {
                count:0
            }
        }
    }

})();