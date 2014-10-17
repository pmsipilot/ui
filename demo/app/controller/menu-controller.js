angularModule.controller('MenuController', ['$scope', '$location', function($scope, $location) {

    $scope.isCurrent = function (tab) {
        return $location.path().indexOf('/' + tab) === 0;
    };

}]);
