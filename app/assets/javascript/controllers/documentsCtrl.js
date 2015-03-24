angular.module('mouApp')
    .controller('DocumentsCtrl', function ($rootScope, $window, $scope, $http, $sce, $location, $routeParams, $timeout,  Documents) {

        var converter = new Showdown.converter();

        if ($routeParams.documentId) {
            $scope.document = Documents.show({id: $routeParams.documentId}, function(data){
                $scope.bodyHtml = $sce.trustAsHtml(converter.makeHtml(data.body));
                Prism.highlightAll();
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
            $scope.bodyHtml = $sce.trustAsHtml(converter.makeHtml(body));
            // Syntax highlighting, the hacky way... (using a directive would be better)
            $timeout(function(){
                Prism.highlightAll();
            }, 0, true);
        }
    });
