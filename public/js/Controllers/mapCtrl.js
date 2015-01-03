var app = angular.module("roadKillReport");

app.controller("mapCtrl", function($scope, mapService){
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };}
});
