angular.module('mouApp')
    .factory('Documents', ['$resource', function($resource) {
        var DocumentsService = $resource('/documents/:id', {id: '@id'}, {
            'create': { method: 'POST' },
            'index': { method: 'GET', isArray: true },
            'show': { method: 'GET', isArray: false },
            'update': { method: 'PUT' },
            'destroy': { method: 'DELETE' }
    });
    return DocumentsService;
}]);

