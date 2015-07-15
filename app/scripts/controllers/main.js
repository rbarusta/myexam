'use strict';

/**
 * @ngdoc function
 * @name myexamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myexamApp
 */
angular.module('myexamApp')
  .controller('MainCtrl', function ($scope, $http, LxNotificationService) {
    $scope.contacto = {};



    $scope.enviar = function  (argument) {
    	// body...
    	$http.post("api/send.php", contacto)
            .success(function(respuesta){
                LxNotificationService.success('Enviado!');
            });
            
    }

    
  });
