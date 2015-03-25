angular.module('mouApp')
    .controller('HomeCtrl', ['$scope', '$sce', '$http', '$timeout', function ($scope, $sce, $http, $timeout) {

        // In order to not write twice the same boring text. Use a markdown file, converted for HTML rendering
        $http.get('/markdown_overview.md').
            success(function (response) {
                $scope.rowMd = response;
                var converter = new Showdown.converter();
                $scope.convertedMd = $sce.trustAsHtml(converter.makeHtml(response));

                // Syntax highlighting, the hacky way... (using a directive would be better)
                $timeout(function(){
                    Prism.highlightAll();
                }, 1, true);
            });

    }]);
