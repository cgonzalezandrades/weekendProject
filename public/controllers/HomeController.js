myApp.controller('HomeController', ['$scope', '$rootScope', '$rootScope', '$state', '$stateParams',
    function ($rootScope, $scope, $state, $stateParams) {

        $scope.state = $stateParams.current.name;

        console.log($scope.state);

        console.log("Hello from Home controller");

        $scope.hello = 'home';

    }]);