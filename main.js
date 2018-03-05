var app = angular.module('app', []);

app.controller('mainCtrl', function($scope, AppDataService) {

    AppDataService.getData()
        .then(function(result) {$scope.results = result.data; console.log($scope.results)},
              function(err) {console.log(err)});
})

app.factory('AppDataService', function($http) {
    var req = {
        method: 'POST',
        url: 'http://plaprotest.azurewebsites.net/api/v1/History/GamesWithRating',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'Limit=5&UserName=Dendi&includeUnmarkedGames=False'
    }
    return {
        getData: function() {
            return $http(req)
        }
    }
})

app.directive('appTable', function() {
    return {
        restrict: 'E',
        templateUrl: 'appTable.html',
        link: function(scope, element, attr) {
            
        }
    }
})

app.filter('momentFilter', function() {
    return function(str, format) {
        return moment(str).format(format);
    }
})