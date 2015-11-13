'use strict';

/**
 * @ngdoc module
 * @name appServices
 * @description
 *
 * # appServices
 *
 * The `appServices` module provides a convenient wrapper for for all needed services in the application.
 * 
 */

angular.module('appServices', ['ngResource', 'appConfigs'])
        /**
         * @ngdoc service
         * @name utils
         * @description This utils service provide some common methods that would need throughout the application
         * @return {Object} This return injectable object that may contains set of helping methods
         */
        .factory('utils', utils)
        .factory('dataService', dataService)
        .factory('userServices', userServices)
        .factory('customerServices', customerServices)
        .factory('requestServices', requestServices)
        .factory('newFeedServices', newFeedServices)
        .factory('settingsServices', settingsServices)
        .factory('prompts', prompts)

        .factory('dealerMarketServices', dealerMarketServices)

        .filter('parseDate', function() {
            return function(str) {
              return Date.parse(str);
            };
        })

;


dataService.$inject = ['$resource', 'CONFIG'];
function dataService($resource, CONFIG){
    return $resource(CONFIG.WS_API_BASE, {}, {
        request: {method:'POST', isArray:false},
        get: {method:'POST', isArray:false},
        getData: {method:'POST', isArray:false},
        save: {method:'POST'},
        dealerList: {method: 'POST', params: {action:'getdealerlistformarket'}},
        dealerMarketCampaign: {method: 'POST', params: {action:'dealer-market-campaign.json'}, isArray: true},
        getRequest: {method: 'GET', isArray: true}
    });
}

dealerMarketServices.$inject = ['$resource', 'CONFIG'];
function dealerMarketServices($resource, CONFIG){
    return $resource(CONFIG.apiFake, {action:'dealer-list.json'}, {
        post: {method: 'POST', isArray: true}
    });
}

userServices.$inject = ['$resource', 'CONFIG'];
function userServices($resource, CONFIG){
    return $resource(CONFIG.WS_API_BASE , {action:'adminlogincheck'}, {
        logout: {method: 'POST', params:{action:'logout'}},
        requestPassword: {method: 'POST', params:{action: 'requestPassword'}},
        auth: { method: 'POST',  params:{action:'adminlogincheck'}},
    });
}

customerServices.$inject = ['$resource', 'CONFIG'];
function customerServices($resource, CONFIG){
    return $resource(CONFIG.WS_API_BASE , {action:'fetchcustomerwithdetailcust'}, {
        post: {method: 'POST'},
        save: {action:'savethis'}
    });
}

/**
 * 
 * This provides data for customer requests service/test 
 */

requestServices.$inject = ['$resource', 'CONFIG'];
function requestServices($resource, CONFIG){
    return $resource(CONFIG.WS_API_BASE , {action:'getdealerservicerequest'}, {
        post: {method: 'POST', isArray: false},
        save: {method: 'POST'}
    });
}

/**
 * 
 * This provide data for new feed section
 */
newFeedServices.$inject = ['$resource', 'CONFIG'];
function newFeedServices($resource, CONFIG){
    return $resource(CONFIG.apiFake , {}, {
        post: {method: 'POST', isArray: true}
    });
}

/**
 * 
 * This provide data for settings section
 */
settingsServices.$inject = ['$resource', 'CONFIG'];
function settingsServices($resource, CONFIG){
    return $resource(CONFIG.WS_API_BASE , {}, {
        post: {method: 'POST'}
    });
}

//confirm
prompts.$inject = ['$rootScope', 'CONFIG', '$modal'];
function prompts($rootScope, CONFIG, $modal){
    function confirm(msg){
        var modal = $modal({
            show: true,
            html: true,
            backdrop: 'static',
            container: 'body',
            placement: 'center',
            template: 'modules/partials/request-confirm-modal.html'
        });
    }
    return {
        confirm: confirm
    }
}


utils.$inject = ['$rootScope', '$log', '$filter', '$state'];
function utils($rootScope, $log, $filter, $state){
    return {
    }
}