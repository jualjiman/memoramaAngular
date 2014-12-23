'use strict';

/**
 * @ngdoc function
 * @name memoramaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoramaApp
 */
angular.module('memoramaApp')
  .controller('MainCtrl', function ($scope,$timeout) {
  	
  	$scope.seleccion = {
  		carta1 : {
  			val : 0,
  			key : null,
  			domid : null
  		}
  	};

  	$scope.cards = {
  		c1 : 
  			{
  				cid : 1,
  				colocadas : 0
  			},
  		c2 : 
  			{
  				cid : 2,
  				colocadas : 0
  			},
  		c3 	:
  			{
  				cid : 3,
  				colocadas : 0
  			},
  		c4 	:
  			{
  				cid : 4,
  				colocadas : 0
  			},
  		c5 	:
  			{
  				cid : 5,
  				colocadas : 0
  			},
  		c6 	:
  			{
  				cid : 6,
  				colocadas : 0
  			},
  		c7 	:
  			{
  				cid : 7,
  				colocadas : 0
  			},
  		c8 	:
  			{
  				cid : 8,
  				colocadas : 0
  			},
  		c9 	:
  			{
  				cid : 9,
  				colocadas : 0
  			},
  		c10 :
  			{
  				cid : 10,
  				colocadas : 0
  			}
  	};

  	$scope.tablero = {
  		p1 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p2 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p3 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p4 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p5 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p6 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p7 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p8 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p9 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p10 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p11 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p12 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p13 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p14 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p15 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p16 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p17 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p18 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p19 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			},
  		p20 : {
  				contenido : 0,
  				texto : "?",
  				activo : true
  			}
  	};


  	$scope.revolver = function(){
  		_($scope.tablero).forOwn(
  			function(val,key){
  				var card = _.find(_.shuffle($scope.cards), 
  					function(card){
  						return card.colocadas < 2;
  					}
  				);
  				card.colocadas++;
  				$scope.tablero[key].contenido = card.cid;
  		});
  	};

  	$scope.mostrar = function(val,key,$event){
  		$scope.tablero[key].texto = val;
  		$($event.currentTarget).addClass("volteada");

  		if($scope.seleccion.carta1.val === 0 && $scope.tablero[key].activo === true){
  			$scope.seleccion.carta1.val = val;
  			$scope.seleccion.carta1.key = key;
  			$scope.seleccion.carta1.domid = $event.currentTarget;
  		}else if($scope.seleccion.carta1.val === val){
  			$scope.tablero[$scope.seleccion.carta1.key].activo = false;
  			$scope.tablero[key].activo = false;
  			$scope.seleccion.carta1.val = 0;

  			$($event.currentTarget).addClass("descubierta");
  			$($scope.seleccion.carta1.domid).addClass("descubierta");

  		}else{
  			$timeout(function(){ fail(key,$event)} ,1000)
  		}
  		console.log();
  	};

  	function fail(key,$event){
  		if($scope.tablero[$scope.seleccion.carta1.key].activo){
  			$scope.tablero[$scope.seleccion.carta1.key].texto = "?";
  			$($scope.seleccion.carta1.domid).removeClass("volteada");
  		}
  		if($scope.tablero[key].activo){
  			$scope.tablero[key].texto = "?";
  			$($event.currentTarget).removeClass("volteada");
  		}
  		
  		$scope.seleccion.carta1.val = 0;
  	}

  	$scope.revolver();
  });
