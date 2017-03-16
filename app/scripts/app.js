'use strict';

/**
 * @ngdoc overview
 * @name llApp
 * @description
 * # llApp
 *
 * Main module of the application.
 */
angular.module('llApp', ['ui.router'])
  .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
  	$stateProvider.state('jgr',{
  		url:"/jgr",
  		templateUrl:"views/jgr.html"
  	}).state("wbm",{
  		url:"wbm",
  		templateUrl:"views/wbm.html"
  	})
  	$urlRouterProvider.when("","/jgr")
  }])
