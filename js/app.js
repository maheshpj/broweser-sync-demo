angular.module('BrowserSyncApp', [
    'ngRoute',
    'BrowserSyncApp.controllers'
]);

angular.module('BrowserSyncApp')
    .config([
        '$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.
                 when('/home', {
                    templateUrl: '../partials/home.html',
                    controller: 'HomeController'
                }).
                when('/about', {
                    templateUrl: '../partials/about.html',
                    controller: 'AboutController'
                }).
                when('/contact', {
                    templateUrl: '../partials/contact.html',
                    controller: 'ContactController'
                }).
                otherwise({
                    redirectTo: '/home'
                });

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
        }
    ]);