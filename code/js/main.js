"use strict";
angular.module("videogularApp", [
   "ngSanitize",
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.buffering",
    "com.2fdevs.videogular.plugins.poster",
    "info.vietnamcode.nampnq.videogular.plugins.quiz"
    ]).controller('videogularCtrl', ['$scope', '$sce',
        function ($scope, $sce) {
        $scope.onQuizSubmit = function (data) {
            return {
                result: true,
                description: "Correct"
            }
        };
        $scope.config = {
            plugins: {
                poster: {
                    url: "assets/images/videogular.png"
                },
                quiz: {
                    data: [{
                        "time": "164",
                        "question_id": "70d70be689d73e08687496a6d12b2b0d",
                        "html": "<div style=\"position:absolute;\">Select the restaurant(s) that serve Canadian cuisine for a price of $$$.\n\n<small>\n<pre>Georgie Porgie\n87%\n$$$\nCanadian,Pub Food\n\nSilver Spoon\n97%\n$$$$\nCanadian\n\nCoffee Cafe\n77%\n$$\nCoffee/Tea,Diner\n</pre>\n</small>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left: 470px; top: 50px;\">\n<input dir=\"auto\" class=\"quiz-input\" type=\"checkbox\" name=\"answer[70d70be689d73e08687496a6d12b2b0d][]\" id=\"gensym_52be3ad71a1f5\" value=\"d5c5ec0ff53ebf35958c5ba02c30ce24\"><label for=\"gensym_52be3ad71a1f5\" style=\"cursor:pointer;\">Georgie Porgie</label>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left: 470px; top: 140px; /* width:370px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"checkbox\" name=\"answer[70d70be689d73e08687496a6d12b2b0d][]\" id=\"gensym_52be3ad71a71f\" value=\"cfc6db592e488051decbce17bd7b98b8\"><label for=\"gensym_52be3ad71a71f\" style=\"cursor:pointer;\">Silver Spoon</label>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left: 470px; top: 230px; /* width:370px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"checkbox\" name=\"answer[70d70be689d73e08687496a6d12b2b0d][]\" id=\"gensym_52be3ad71ac52\" value=\"b387d47429de02592f973814b393e51d\"><label for=\"gensym_52be3ad71ac52\" style=\"cursor:pointer;\">Coffee Cafe</label>\n</div>",
                        "background": "color",
                        "background_src": "white",
                        "post_answer_url": "https:\/\/class.coursera.org\/programming2-001\/quiz\/video_quiz_attempt?method=post_question_answer&quiz_id=20&preview=0&question_id=70d70be689d73e08687496a6d12b2b0d"
                    }, {
                        "time": "180",
                        "question_id": "9326a7b17e15cfc69f8e46f9357bf6c5",
                        "html": "<div dir=\"auto\" class=\"quiz-question-text\" style=\"position:absolute;\">\n<small>\n<pre>def is_palindrome_v3(s):\n    i = 0\n    j = len(s) - 1\n    while i &lt; j and s[i] == s[j]:\n        i = i + 1\n        j = j - 1\n\n    return j &lt;= i\n</pre>\n</small>\nIf <code>s</code> refers to a single-character string such as 'x', when the return statement is reached, which of the following expressions evaluates to <code>True</code>?</div>\n<div class=\"quiz-option\" style=\"position:absolute; left:40px; top: 250px; /* width:370px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"radio\" name=\"answer[9326a7b17e15cfc69f8e46f9357bf6c5][]\" id=\"gensym_52bed85054bc8\" value=\"ad32510af7c53e2fa6cce4d764c09800\"><label for=\"gensym_52bed85054bc8\" style=\"cursor:pointer;\"><code>i == 0 and j == -1</code> </label>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left:40px; top: 320px; /* width:370px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"radio\" name=\"answer[9326a7b17e15cfc69f8e46f9357bf6c5][]\" id=\"gensym_52bed85055221\" value=\"8d53ca2fa487cfbb4479ce2bf7f2e295\"><label for=\"gensym_52bed85055221\" style=\"cursor:pointer;\"><code>i == 0 and j == 0</code> </label>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left:430px; top: 250px; /* width:380px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"radio\" name=\"answer[9326a7b17e15cfc69f8e46f9357bf6c5][]\" id=\"gensym_52bed850558b5\" value=\"94023160fe66f684740c119a18e39a9e\"><label for=\"gensym_52bed850558b5\" style=\"cursor:pointer;\"><code>i == 0 and j == 1</code> </label>\n</div>\n<div class=\"quiz-option\" style=\"position:absolute; left:430px; top: 320px; /* width:380px; */ /* height:80px; */ \">\n<input dir=\"auto\" class=\"quiz-input\" type=\"radio\" name=\"answer[9326a7b17e15cfc69f8e46f9357bf6c5][]\" id=\"gensym_52bed85055eba\" value=\"ff8f062afa22c18eb5c2d4c557bcd44b\"><label for=\"gensym_52bed85055eba\" style=\"cursor:pointer;\"><code>i == 1 and j == 0</code> </label>\n</div>",
                        "background": "color",
                        "background_src": "white",
                        "post_answer_url": "https:\/\/class.coursera.org\/programming2-001\/quiz\/video_quiz_attempt?method=post_question_answer&quiz_id=18&preview=0&question_id=9326a7b17e15cfc69f8e46f9357bf6c5"
                    }]
                }
            }
        }
}]);
