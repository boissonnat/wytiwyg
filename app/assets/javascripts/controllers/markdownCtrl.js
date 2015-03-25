angular.module('mouApp')
    .controller('MarkdownCtrl', ['$scope', function ($scope) {


        $scope.appendTitle = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, '# ', 2);
        }

        $scope.appendBold = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, '____', 2);
        }

        $scope.appendItalic = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, '__', 1);
        }

        $scope.appendLink = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, "[Link to google](https://www.google.com)", 1);
        }

        $scope.appendQuote = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, "> ", 3);
        }

        $scope.appendCode = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, "```language-\n```", 12);
        }

        $scope.appendUnorderedList = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, "* ", 3);
        }

        $scope.appendOrderedList = function () {
            var bodyElm = document.getElementById("bodyElm"); //.value += "#";
            insertAtCursor(bodyElm, "1. ", 4);
        }
        function insertAtCursor(myField, myValue, newCursorPosition) {
            if (myField.selectionStart || myField.selectionStart == '0') {
                var startPos = myField.selectionStart;
                var endPos = myField.selectionEnd;
                myField.value = myField.value.substring(0, startPos)
                + myValue
                + myField.value.substring(endPos, myField.value.length);
                myField.focus();
                myField.selectionStart = startPos + newCursorPosition;
                myField.selectionEnd = startPos + newCursorPosition;
            } else {
                myField.value += myValue;
            }
        }
    }]);
