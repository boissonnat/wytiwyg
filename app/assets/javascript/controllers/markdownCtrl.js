angular.module('mouApp')
    .controller('MarkdownCtrl', function ($rootScope, $window, $scope) {


        $scope.appendTitle = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, '#');
        }

        $scope.appendBold = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, '__ __');
        }

        $scope.appendItalic = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, '_ _');
        }

        $scope.appendLink = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, "[Link to google](https://www.google.com)");
        }

        $scope.appendQuote = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, ">");
        }

        $scope.appendCode = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, "``` ```");
        }

        $scope.appendUnorderedList = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, "* ");
        }

        $scope.appendOrderedList = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, "1. ");
        }
        function insertAtCursor(myField, myValue) {
            if (myField.selectionStart || myField.selectionStart == '0') {
                var startPos = myField.selectionStart;
                var endPos = myField.selectionEnd;
                myField.value = myField.value.substring(0, startPos)
                + myValue
                + myField.value.substring(endPos, myField.value.length);
                myField.focus();
                myField.selectionStart = startPos + myValue.length;
                myField.selectionEnd = startPos + myValue.length;
            } else {
                myField.value += myValue;
            }
        }
    });
