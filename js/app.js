angular.module('pmsipilot-ui-demo',[
    'ui.bootstrap',
    'ngRoute'
]);

angular.module('pmsipilot-ui-demo').config(['$routeProvider', function($routeProvider) {

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

angular.module('pmsipilot-ui-demo').controller('MenuController', ['$scope', '$location', function($scope, $location) {

    $scope.isCurrent = function (tab) {
        return $location.path().indexOf('/' + tab) === 0;
    };

}]);

angular.module('pmsipilot-ui-demo').controller('PopupsController', ['$scope', '$modal', function($scope, $modal) {

    $scope.openModal = function(theme) {
        $scope.theme = theme;

        $modal.open({
            templateUrl: 'partials/utils/modal.html',
            windowClass: 'modal-' + theme,
            backdrop: 'static',
            scope: $scope,
            controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
                $scope.close = $modalInstance.close;
            }]
        });
    };
}]);

angular.module('pmsipilot-ui-demo').directive('pmPrettify', ['$http', function($http) {
        return {
            scope: {
                template: "=pmPrettify"
            },
            link: function(scope, element) {
                $http.get(scope.template, { cache: true }).success(function(template) {
                    element.html(prettyPrintOne($('<div></div>').text(template).html(), undefined, true));
                });
            }
        };
    }]);
