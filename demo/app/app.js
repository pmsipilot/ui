var angularModule = angular.module('pmsipilot-ui-demo',[
    'ui.bootstrap',
    'ngRoute'
]);

angularModule.config(['$routeProvider', function($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'partials/home.html'
        })

        .when('/layouts', {
            templateUrl: 'partials/layouts.html'
        })

        .when('/logos', {
            templateUrl: 'partials/logos.html'
        })

        .when('/buttons', {
            templateUrl: 'partials/buttons.html'
        })

        .when('/icons', {
            templateUrl: 'partials/icons.html'
        })

        .when('/css', {
            templateUrl: 'partials/css.html'
        })

        .when('/themes', {
            templateUrl: 'partials/themes.html'
        })

        .when('/popups', {
            url: '/popups',
            templateUrl: 'partials/popups.html',
            controller: 'PopupsController'
        })

        .otherwise('/')
    ;

}]);
