'use strict';
app.factory('patternsContext', ['$http', function ($http) {

    var api = 'http://localhost:9001/api/product/';

    var getAll = function () {
        return $http({
            url: api,
            method: 'GET'
        });
    };

    return {
        get: getAll
    };
}]);
