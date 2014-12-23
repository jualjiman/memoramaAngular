'use strict';

/**
 * @ngdoc function
 * @name memoramaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoramaApp
 */
angular.module('memoramaApp')
  .controller('MainCtrl', function ($scope) {
  	
  	$scope.seleccion = {
  		carta1 : 0,
  		carta2 : 0
  	};

  	$scope.cards = {
  		"c1" : 
  			{
  				cid : 1,
  				colocadas : 0,
  				descubiertas : 0
  			},
  		"c2" : 
  			{
  				cid : 2,
  				colocadas : 0,
  				descubiertas : 0
  			},
  		"c3" : 
  			{
  				cid : 3,
  				colocadas : 0,
  				descubiertas : 0
  			},
  		"c4" : 
  			{
  				cid : 4,
  				colocadas : 0,
  				descubiertas : 0
  			},
  		"c5" : 
  			{
  				cid : 5,
  				colocadas : 0,
  				descubiertas : 0
  			},
  		"c6" : 
  			{
  				cid : 6,
  				colocadas : 0,
  				descubiertas : 0
  			},
  		"c7" : 
  			{
  				cid : 7,
  				colocadas : 0,
  				descubiertas : 0
  			},
  		"c8" : 
  			{
  				cid : 8,
  				colocadas : 0,
  				descubiertas : 0
  			},
  		"c9" : 
  			{
  				cid : 9,
  				colocadas : 0,
  				descubiertas : 0
  			},
  		"c10" : 
  			{
  				cid : 10,
  				colocadas : 0,
  				descubiertas : 0
  			}
  	};

  	$scope.tablero = {
  		p1 : 0,
  		p2 : 0,
  		p3 : 0,
  		p4 : 0,
  		p5 : 0,
  		p6 : 0,
  		p7 : 0,
  		p8 : 0,
  		p9 : 0,
  		p10 : 0,
  		p11 : 0,
  		p12 : 0,
  		p13 : 0,
  		p14 : 0,
  		p15 : 0,
  		p16 : 0,
  		p17 : 0,
  		p18 : 0,
  		p19 : 0,
  		p20 : 0
  	};

  	$scope.revolver = function(){
  		_($scope.tablero).forEach(
  			function(pos){
  				var card = _.find(_.shuffle($scope.cards), 
  					function(card){
  						return card.colocadas < 2;
  					}
  				);
  				card.colocadas++;
  				pos = card.cid;
  				console.log(pos);
  		});
  	};

  	$scope.revolver();

  	


  });
