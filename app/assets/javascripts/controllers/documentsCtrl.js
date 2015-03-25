angular.module('mouApp')
    .controller('DocumentsCtrl', ['$rootScope', '$window', '$scope', '$http', '$sce', '$location', '$routeParams', '$timeout', 'Documents',
        function ($rootScope, $window, $scope, $http, $sce, $location, $routeParams, $timeout, Documents) {

            var converter = new Showdown.converter();

            if ($routeParams.documentId) {
                $scope.document = Documents.show({id: $routeParams.documentId}, function (data) {
                    $scope.bodyHtml = $sce.trustAsHtml(converter.makeHtml(data.body));
                    Prism.highlightAll();
                });

            }

            $scope.addDocument = function () {
                Documents.create({
                    document: {
                        title: $scope.document.title,
                        body: $scope.document.body
                    }
                }, function (data) {
                    console.log('Data = ' + data.title);
                    $rootScope.$broadcast('refreshDocuments', data);
                    $window.location.href = '#/documents/' + data.id;
                });
            };

            $scope.updateDocument = function () {
                Documents.update({id: $routeParams.documentId, document: $scope.document}, function (data) {
                    $window.location.href = '#/documents/' + $routeParams.documentId;
                    $rootScope.$broadcast('refreshDocuments', data);
                });
            };

            $scope.destroyDocument = function () {
                var confirmDelete = $window.confirm('Are you absolutely sure you want to delete?');

                if (confirmDelete) {
                    Documents.destroy({id: $routeParams.documentId}, function () {
                        $window.location.href = '#/home';
                        $rootScope.$broadcast('refreshDocuments');
                    });
                }

            };

            $scope.change = function (body) {
                $scope.bodyHtml = $sce.trustAsHtml(converter.makeHtml(body));
                // Syntax highlighting, the hacky way... (using a directive would be better)
                $timeout(function () {
                    Prism.highlightAll();
                }, 0, true);
            }
        }]);
