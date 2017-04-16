myApp.controller('HomeController', ['$scope', '$rootScope', '$rootScope', '$state', '$stateParams',
    function ($rootScope, $scope, $state, $stateParams) {

        $scope.state = $stateParams.current.name;

        console.log($scope.state);

        console.log("Hello from Home controller");

        $scope.hello = 'home';


        $(document).ready(function () {

            var clickEvent = false;
            $('#myCarousel').on('click', '.nav a', function () {
                clickEvent = true;

                $('.nav li').removeClass('active');

                $(this).parent().addClass('active');

            }).on('slid.bs.carousel', function (e) {

                if (!clickEvent) {
                    var count = $('.nav').children().length - 1;
                    var current = $('.nav li.active');
                    current.removeClass('active').next().addClass('active');
                    var id = parseInt(current.data('slide-to'));
                    if (count == id) {
                        $('.nav li').first().addClass('active');
                    }
                }
                clickEvent = false;
            });
        });

    }]);