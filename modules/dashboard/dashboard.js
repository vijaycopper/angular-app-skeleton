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
                                        templateUrl: 'modules/app/dashboard-tmpl.html',
                                        controller: 'dashboardController as dashboard'
                                    }
                                }
                            });

                }
            ])
            
            .controller('dashboardController', dashboardController)
            .directive('gridRowData', function(){
                return {
                   templateUrl : function(elem, attr){
                       console.log(attr);
                       //'modules/dashboard/grid-row-'+ rowData +'.html'
                   },
                    compile: function(elem, attr){
                            function link($scope, elem, attr){
                               
                               templateUrl = 'modules/dashboard/grid-row-pending.html';
                               //elem.html("<ng-include src='modules/dashboard/grid-row-" + $scope.rowData.status +".html'></ng-include>"); 
                            }
                            return link;
                        },
                    scope: {
                        rowData: '=rowData'
                    }
                    
                }
            })



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