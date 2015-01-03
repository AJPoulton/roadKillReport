var app = angular.module('roadKillReport', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "/views/locationRoute/locationRoute.html",
		controller: "locationCtrl"
	})
})
// app.config()