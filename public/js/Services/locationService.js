var app = angular.module("roadKillReport");

app.service("locationService", function($http) {
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