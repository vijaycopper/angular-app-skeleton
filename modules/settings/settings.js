(function(){
 
'use strict';

/**
 * @class user-requests
 * @description This module provide functionality to list and schedule customer's request
 * 
 */

angular.module('app.settings', [])
         
        .config(['$stateProvider', function($stateProvider){
            $stateProvider
            .state('admin.settings', {
                url: '/settings',
                views: {
                    'container@': {
                        templateUrl: 'modules/settings/settings.html'
                    }
                }
            });
        }])
        .controller('settingsController', settingsController)
;


/**
 * settingsController
 */
settingsController.$inject = ['$rootScope', '$scope'];
function settingsController($rootScope, $scope){
    
}
   
})();