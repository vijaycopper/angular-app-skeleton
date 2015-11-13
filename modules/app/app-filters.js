(function(){

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

angular.module('appFilters', ['appConfigs'])
        /**
         * Collection of custom filter used in app
         */

        .filter('parseDate', function() {
            return function(str) {
              return Date.parse(str);
            };
        })

;
    
})();
