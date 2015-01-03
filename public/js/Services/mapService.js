var app = angular.module("roadKillReport");

app.service("mapService", function($http) {
	return {
		getLocation: function(lat, long) {
			return $http.post("/api/getLocation", {lat: lat, long: long})
			.then(function(response) {
				console.log(response.data);
				return response.data;
			})
		},
	}
});