angular.module('pmsipilot-ui-demo').controller('MenuController', ['$scope', '$location', function($scope, $location) {

    $scope.isCurrent = function (tab) {
        return $location.path().indexOf('/' + tab) === 0;
    };

}]);
