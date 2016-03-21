angular.module('BrowserSyncApp.controllers', [
])
    .controller('MainController', [
        '$scope', 
        function($scope) {
            'use strict';

            $scope.isTextaraVisible = function() {
                return true;
            };
        }
    ]);