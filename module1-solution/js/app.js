(function() {
    'use strict';

    angular.module('LunchApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];

    function LunchCheckController($scope, $filter) {
        $scope.inputValue = "";
        $scope.prompt = "list comma separated dishes you usually have for lunch";

        $scope.process = function() {
            var itemCount = getItemCount($scope.inputValue);
            $scope.status = getStatus(itemCount);
            $scope.message = getMessage($scope.status);
        };

        function getStatus(itemCount) {
            if (itemCount == 0) {
                return "no-data";
            } else if (itemCount <= 3) {
                return "enjoy";
            } else {
                return "too-much";
            }
        }

        function getMessage(status) {
            switch (status) {
                case "no-data":
                    return "Please enter data first";
                case "enjoy":
                    return "Enjoy!"
                case "too-much":
                    return "Too much!";
            }
        }

        function getItemCount(str) {
            return str.split(",").reduce(
                (prev, curr) => prev + ((curr.trim() != '') ? 1 : 0),
                0);
        }
    }
})();
