'use strict';

app.controller('UsuarioController',['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location){
	
}]);

app.controller('ManterUsuarioController', ['$http', '$location', function($http, $location){
	this.usuario = {};

	this.login = function(){
		$http.post($_API + '/login', {login: 'pgoncalves', senha: '123'})
		.success(function(data, status, headers, config, statusText){
			console.log(data, status, headers, config, statusText);
		})
		.error(function(data, status, headers, config, statusText){
			console.log(data, status, headers, config, statusText);
		});
	};

	this.criar = function(){
		$http.post($_API + '/usuario/create', this.usuario)
		.success(function(data, status){
			console.log(data, status);
		})
		.error(function(data, status){
			console.log(data, status);
		});
	};
}]);

