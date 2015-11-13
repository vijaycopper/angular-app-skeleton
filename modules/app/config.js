//This file contains all initial configuration for the APP
'use strict';

/**
 * 
 * @type global variable
 * @namespace config
 * @description Holds the default configuratin for the app
 */
var config = {
    "LANGUAGE": "en",
    "THEME": "themes/default",
    "API_FAKE": "fake",
    "API_DEV": "",
    "API_STAGING": "",
    "API_PRODUCTION": ""
};

(function () {
    angular.module('app.config',[])
            /**
             * @type provider
             * @namespace appConfig
             * @returns appConfigProvider
             */
            .provider('appConfig', function () {
                var config = {};
                angular.copy(window['config'], config);

                return {
                    set: function (key, value) {
                        config[key] = value;
                    },
                    get: function (key) {
                        return config[key] ? config[key] : false;
                    },
                    $get: function () {
                        return config;
                    }
                };
            })
            ;
})();
