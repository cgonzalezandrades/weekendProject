/**
 * Created by carlosgonzalez on 4/5/17.
 */
var myApp = angular.module('myApp',['ngAnimate','ui.router','anim-in-out']);




console.log("in myApp");
    // console.log($location.path());

myApp.config( function ($stateProvider, $locationProvider) {



$stateProvider
    .state('about',{
        url:'/about',
        templateUrl:'/views/about.html',
        controller:'AboutController'
    })
    .state('/',{
        url:'/home',
        templateUrl:'/views/home.html',
        controller:'HomeController'
    })
    // $locationProvider.html5Mode(true).hashPrefix('/#!/');
    // $locationProvider.html5Mode(true);
})

// /test.html#!/about