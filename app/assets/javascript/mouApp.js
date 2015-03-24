var mouApp = angular.module('mouApp', ['ui.router', 'ngResource', 'ngRoute', 'ngAnimate']);

mouApp.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$resourceProvider',
    '$routeProvider',
    function ($stateProvider, $urlRouterProvider, $resourceProvider, $routeProvider) {
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;

        $routeProvider.
            when('/documents/home', {
                templateUrl: 'documents/home.html',
                controller: 'HomeCtrl'
            }).
            when('/documents/new', {
                templateUrl: 'documents/new.html',
                controller: 'DocumentsCtrl'
            }).
            when('/documents/:documentId', {
                templateUrl: 'documents/show.html',
                controller: 'DocumentsCtrl'
            }).
            when('/documents/edit/:documentId', {
                templateUrl: 'documents/edit.html',
                controller: 'DocumentsCtrl'
            }).
            otherwise({
                redirectTo: '/documents/home'
            });

    }])

mouApp.directive('documentList', function (Documents) {
    return {
        templateUrl: 'documents/_list.html',
        controller: 'DocumentsListCtrl',
        link: function (scope) {
            scope.$on('userLoggedIn', function () {
                scope.documents = Documents.index();
            });
        }
    }
});

mouApp.directive('markdownActions', function () {
    return {
        templateUrl: 'documents/_markdown_actions.html',
        controller: 'MarkdownCtrl'
    }
});

mouApp.directive('documentForm', function () {
    return {
        templateUrl: 'documents/_form.html',
        controller: 'DocumentsCtrl'
    }
});

mouApp.directive('documentInfos', function () {
    return {
        templateUrl: 'documents/_infos.html',
        controller: 'DocumentsCtrl'
    }
});

mouApp.directive('waitButton',   ['$http' ,function ($http) {
    return {
        link: function (scope, elm) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };
            scope.$watch(scope.isLoading, function (v) {
                if(v){
                    elm.show();
                }else{
                    elm.hide();
                }
            });
        }
    };

}]);