"use strict";
angular.module("Scrollbar", []).directive("scrollbar", ['$compile', '$window', function($compile, $window) {

    return {
        restrict: "A",
        link: function(scope, element, attrs) {

            /* Shorthand reference */
            var e = element[0];

            /* Add scroll child element */
            var scrollElement = $compile("<scroll></scroll>")(scope);
            element.append(scrollElement);

            /* Initial necessary css */
            scrollElement.css({"position" : "absolute"});

            /* Calculates position and height of the scrollbar */
            function calc() {
                scrollElement.css({"top" : e.clientHeight * e.scrollTop / e.scrollHeight + "px",
                "height" : e.clientHeight * e.clientHeight / e.scrollHeight + "px"});
            }

            /* Recalculate on scroll */
            element.bind("scroll", calc);

            /* Recalculate as soon as this element is created */
            element.ready(calc);

            /* Recalculate when window is resized */
            angular.element($window).on('resize', calc);
        },
    };

}]);
