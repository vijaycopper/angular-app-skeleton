(function(){

'use strict';

/**
 * @ngdoc module
 * @name appDirectives
 * @description
 *
 * # appDirectives
 *
 * The `appDirectives` module provides a convenient wrapper for for all needed custom directive throughout the application.
 * 
 */

angular.module('appDirectives', ['appConfigs'])
        /**
         * Collection of custom directives used in app
         */

        .directive('onErrorSrc', function() {
            return {
				link: function(scope, element, attrs) {
              	 	element.bind('error', function(){
						if (attrs.src != attrs.onErrorSrc) {
							attrs.$set('src', attrs.onErrorSrc);
						}
            		})
				}
			 }
        })
		
		.directive('ngModel', function() {
			return {
			require: 'ngModel',
			link: function(scope, elem, attr, ngModel, ngClass) {
				elem.on('blur', function() {
					ngModel.$dirty = true;
					elem.removeClass('blured');
					elem.removeClass('focused');
					elem.addClass('blured');
					scope.$apply();
				});
				
				elem.on('focus', function() {
					ngModel.$dirty = true;
					elem.removeClass('blured');
					elem.removeClass('focused');
					elem.addClass('focused');
					scope.$apply();
				});
			
				ngModel.$viewChangeListeners.push(function() {
					ngModel.$dirty = false;
				});
			
				scope.$on('$destroy', function() {
					elem.off('blur');
				});
			}
    }
});

;
    
})();
