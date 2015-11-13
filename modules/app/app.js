(function () {

    'use strict';

    /**
     * @module: Dealer Admin
     * 
     */

    var modules = ['ui.router', 'ngAnimate'
        ,'translate'
        ,'app.config'
        ,'app.dashboard'
        ,'app.login'
        ,'admin-settings'
    ];

    angular.module('Admin', modules)

            .config(['$stateProvider', '$compileProvider', '$urlRouterProvider', 'appConfigProvider',
                function ($stateProvider, $compileProvider, $urlRouterProvider, appConfigProvider) {
                    $compileProvider.debugInfoEnabled(appConfigProvider.get('DEBUG_MODE'));
                    $stateProvider
                            .state('admin', {
                                abstract: true,
                                url: "",
                                views: {
                                    'header': {
                                        templateUrl: 'modules/app/app-header.html',
                                    },
                                    footer: {
                                        templateUrl: 'modules/app/app-footer.html'
                                    }
                                }
                            });
                  $urlRouterProvider.otherwise("/dashboard");

                  //$httpProvider.defaults.headers.common["x-requested-with"] = 'dfdf';
                }
            ])

            .controller('coreMainController', coreMainController)
;

    coreMainController.$inject = ['$rootScope', '$scope', '$state', 'appConfig'];
    function coreMainController($rootScope, $scope, $state, appConfig) {
        var vm = this;
        $rootScope.date = new Date();
        $rootScope.UTCDate = Date.parse($rootScope.date);
        $rootScope.config = appConfig;

       
    }

})();

