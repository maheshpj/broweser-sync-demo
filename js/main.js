angular.module('BrowserSyncApp.controllers', [
])
    .controller('HomeController', [
        '$scope', 
        function($scope) {
            'use strict';

            $scope.isTextaraVisible = function() {
                return true;
            };
        }
    ]);