'use strict';

var app = angular.module('perfilFutebolApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/usuario/lista', {
			templateUrl: '/templates/usuario/lista.html'
		})
		.when('/usuario/novo', {
			templateUrl: '/templates/usuario/novo.html'
		})
		.otherwise({
			redirectTo: '/'
		})

		$locationProvider.html5Mode(true);
	}])
