/**
 * Created by carlosgonzalez on 4/5/17.
 */
var myApp = angular.module('myApp',['ui.router']);


console.log("in myApp");

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});



myApp.config( function ($stateProvider, $locationProvider) {

    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'/partials/home.html',
            controller:'HomeController'


        })
        .state('about',{
            url:'/about',
            templateUrl:'/partials/about.html',
            controller:'AboutController'


        })

    // $locationProvider.html5Mode(true).hashPrefix('/#!/');
    $locationProvider.html5Mode(true);
})

// /test.html#!/about