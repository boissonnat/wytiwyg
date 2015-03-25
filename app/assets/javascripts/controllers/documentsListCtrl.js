angular.module('mouApp')
    .controller('DocumentsListCtrl', ['$window', '$scope', '$http', '$sce', '$location', '$routeParams','Documents',
        function ($window, $scope, $http, $sce, $location, $routeParams, Documents) {
            $scope.documents = Documents.index();


            $scope.isActive = function (documentId) {
                return documentId === $routeParams.documentId;
            };

        }]);
