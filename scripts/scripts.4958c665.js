"use strict";angular.module("angularAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/"})}]),angular.module("angularAppApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularAppApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="jumbotron"> <h1>Do Some Addtions</h1> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> + <input type="number" min="0" ng-model="secondnum"> = <span class="label label-success">{{firstnum + secondnum}}</span> </div> </div>'),a.put("views/contact.html",'<div class="jumbotron"> <h1>Contact</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid! <span class="glyphicon glyphicon-ok"></span></a></p> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Hao Do You Do?</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid! <span class="glyphicon glyphicon-ok"></span></a></p> </div>')}]);