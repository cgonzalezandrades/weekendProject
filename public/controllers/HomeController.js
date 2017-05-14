myApp.controller('HomeController', ['$scope', '$rootScope', '$rootScope', '$state', '$stateParams',
    function ($rootScope, $scope, $state, $stateParams) {

        $scope.currentYear = new Date().getFullYear();
        console.log($scope.currentYear);


        $scope.state = $stateParams.current.name;

        console.log($scope.state);


        console.log("Hello from Home controller");

        $scope.hello = 'home';
        $scope.user = {};

        $scope.contactModal = function (close) {
            console.log('modal click')
            if (close) {
                $('#myModal').modal('hide');
            } else {
                $('#myModal').modal('show');
            }
        }


        // $('#contact-form').submit( function (event) {
        //     console.log('form');
        //     // console.log($form);
        //     event.preventDefault();
        //     //enter code here
        //     var formdata = new FormData(this);
        //
        //     console.log(formdata);
        // })

        $scope.submitForm = function () {
            console.log($scope.user);

            $.ajax({
                type: 'POST',
                url: '/',
                data: $scope.user,
                dataType: 'json',
                success: function (data) {
                    console.log('success');
                    console.log(data);
                }
            })

            $('#myModal').modal('hide');

        }


        // ===== Scroll to Top ====
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(200);    // Fade in the arrow
            } else {
                $('#return-to-top').fadeOut(200);   // Else fade out the arrow
            }
        });
        $('#return-to-top').click(function () {      // When arrow is clicked
            $('body,html').animate({
                scrollTop: 0                       // Scroll to top of body
            }, 500);
        });


    }]);