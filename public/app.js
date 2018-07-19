angular.module('interact', [
    'ui.router',
    'ui.bootstrap',
    'interact.auth'
])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
}])

.run(["uibDatepickerConfig", function(uibDatepickerConfig) {
	uibDatepickerConfig.showWeeks =false;
}])

;
