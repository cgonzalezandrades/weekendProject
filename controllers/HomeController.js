/**
 * Created by carlosgonzalez on 4/5/17.
 */
myApp.controller('HomeController',['$scope','$rootScope', '$rootScope', '$scope', '$log',
    function($rootScope, $scope, $log) {
        var ctrl = this;

        ctrl.speed = 500;
        ctrl.mainViewStyle = 'anim-fade';
        ctrl.page1Style = 'anim-zoom-out';
        ctrl.page2Style = 'anim-slide-below-fade';

        $rootScope.$on('animStart', function() {
            $log.log('animStart');
        });

        $rootScope.$on('animEnd', function() {
            $log.log('animEnd');
        });









    console.log("Hello from Home controller");

    $scope.hello = 'home';

}]);