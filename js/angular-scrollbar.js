"use strict";
angular.module("Scrollbar", []).directive("scrollbar", ['$compile', '$window', '$timeout', function($compile, $window, $timeout) {

    return {
        restrict: "A",
        link: function(scope, element, attrs) {

            /* Handles $timeout to determine when scroll ends */
            var timeout = null;

            /* Time until scroll stop simulation kicks in */
            var timeoutDelay = 580;

            /* Shorthand reference */
            var e = element[0];

            /* Add scroll child element */
            var scrollElement = $compile("<scrollbar></scrollbar>")(scope);
            element.append(scrollElement);

            /* Initial necessary css */
            scrollElement.css({"position" : "absolute"});

            /* Calculates position and height of the scrollbar */
            function calc() {
                scrollElement.css({"top" : e.clientHeight * e.scrollTop / e.scrollHeight + "px",
                "height" : e.clientHeight * e.clientHeight / e.scrollHeight + "px"});
            }

            /* Adds class to <scrollbar> element while scrolling */
            function addClass() {
                $timeout.cancel(timeout);
                scrollElement.addClass("scrolling");
                timeout = $timeout(function() {
                    scrollElement.removeClass("scrolling");
                }, timeoutDelay);
            }

            /* Recalculate on scroll */
            element.bind("scroll", calc);

            /* Handle class modification on scroll */
            element.bind("scroll", addClass);

            /* Recalculate as soon as this element is created */
            element.ready(calc);

            /* Recalculate when window is resized */
            angular.element($window).on('resize', calc);
        },
    };

}]);
