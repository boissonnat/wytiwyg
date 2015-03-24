angular.module('mouApp')
    .controller('DocumentsCtrl', function ($rootScope, $window, $scope, $http, $sce, $location, $routeParams, Documents) {

        if ($routeParams.documentId) {
            $scope.document = Documents.show({id: $routeParams.documentId}, function(data){
                $scope.result = $sce.trustAsHtml(data.bodyHtml);
            });

        }

        $scope.addPost = function () {
            Documents.create({document: {title: $scope.document.title, body: $scope.document.body}}, function (data) {
                console.log('Data = ' + data.title);
                $rootScope.$broadcast('userLoggedIn', data);
                $window.location.href = '#/documents/' + data.id;
            });
        };

        $scope.updatePost = function () {
            Documents.update({id: $routeParams.documentId, document: $scope.document}, function (data) {
                $window.location.href = '#/documents/' + $routeParams.documentId;
                $rootScope.$broadcast('userLoggedIn', data);
            });
        };

        $scope.destroyPost = function () {
            Documents.destroy({id: $routeParams.documentId}, function () {
                $window.location.href = '#/home';
                $rootScope.$broadcast('userLoggedIn');
            });
        };

        $scope.change = function (body) {
            $http.post('/parse_markdown', {markdown: body}).success(function (data) {
                $scope.result = $sce.trustAsHtml(data);
            });
        }

    });
