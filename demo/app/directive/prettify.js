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
