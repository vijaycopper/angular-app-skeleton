(function(){
    'use strict';

    /**
    * @module: Translate
    * @description: This module take care of multilanguage support for the app
    */
    angular
            .module('translate',['pascalprecht.translate', 'app.config'])
            .config(['$translateProvider', 'appConfigProvider',
                function($translateProvider, appConfigProvider)
                {
                    var LANG = appConfigProvider.get('LANGUAGE');
                    $translateProvider.preferredLanguage(LANG);
                    $translateProvider.useStaticFilesLoader({
                        prefix: 'localize/' ,
                        suffix: '.json'
                    });  
                }
            ])

    ;

})();