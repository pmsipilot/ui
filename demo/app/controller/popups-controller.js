angularModule.controller('PopupsController', ['$scope', '$modal', function($scope, $modal) {

    $scope.openModal = function(theme) {
        $scope.theme = theme;

        $modal.open({
            templateUrl: 'partials/utils/modal.html',
            windowClass: 'modal-' + theme,
            backdrop: 'static',
            scope: $scope
        });
    };
}]);
