myApp.controller('AboutController', ['$scope', '$rootScope', '$rootScope', '$state', '$stateParams',
    function ($rootScope, $scope,$state, $stateParams) {

        $scope.state = $stateParams.current.name;

        console.log($scope.state);

        console.log("Hello from about controller");

        $scope.hello = 'about';

        $scope.contactModal  = function () {
            console.log('modal click')
            $('#myModal').modal('show');
        }


        // ===== Scroll to Top ====
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(200);    // Fade in the arrow
            } else {
                $('#return-to-top').fadeOut(200);   // Else fade out the arrow
            }
        });
        $('#return-to-top').click(function() {      // When arrow is clicked
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 500);
        });


    }]);
