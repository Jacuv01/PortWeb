
/* ==========================================================================
   Wrapping JavaScript in a closure is a good Habit!
   ========================================================================== */
   (function(){
   	var app = angular.module('myPortfolio', ['ui.bootstrap', 'ngAnimate']);
   	app.controller('TabController', function(){
   		this.tab = 1;



   		this.setTab = function(newValue){
   			this.tab = newValue;
   		};
   		this.isSet = function(tabName){
   			return this.tab === tabName;
   		};
   	});


   	app.controller("HomeController", function($scope) {

   	});

   	app.controller("AboutController", function($scope) {

   	});

   	app.controller("WorkController", function($scope) {

   	});

   	app.controller("ContactController", function($scope) {

   	});

   })();



