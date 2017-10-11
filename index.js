(function () {

    'use strict';
    angular.module('app', ['ui.router', 'ngDraggable', 'AdalAngular'])
        .config(function ($httpProvider, adalAuthenticationServiceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {



            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'homeCtrl',
                    controllerAs: 'home',
                    templateUrl: './app/controllers/home/home.html',
                    requireADLogin: false,
                })
                .state('grid', {
                    url: '/grid',
                    controller: 'gridCtrl',
                    controllerAs: 'grid',
                    templateUrl: './app/controllers/grid/grid.html'
                })

            $urlRouterProvider.otherwise("/home");
            $locationProvider.html5Mode(true);
            adalAuthenticationServiceProvider.init(
                {
                    instance: 'https://login.microsoftonline.com/',
                    tenant: 'jayasawgmail.onmicrosoft.com',
                    clientId: 'f49e3625-9f1f-412d-b912-ed590c3aa325',
                    endpoints: ['https://graph.windows.net/'],
                    extraQueryParameter: 'nux=1',
                    popUp: true,
                    //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
                },
                $httpProvider
            );
        })
        .controller('mainCtrl', function () {
            var vm = this;
        })


    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
})();