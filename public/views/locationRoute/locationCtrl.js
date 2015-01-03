var app = angular.module("roadKillReport");

app.controller("locationCtrl", function($scope, locationService) {
	
	$scope.coordsToLatLngs = function(coords, useGeoJSON) {
  var first_coord = coords[0],
      second_coord = coords[1];

  if (useGeoJSON) {
    first_coord = coords[1];
    second_coord = coords[0];
  }

  return new google.maps.LatLng(first_coord, second_coord);
};

var arrayToLatLng = function(coords, useGeoJSON) {
  var i;

  for (i = 0; i < coords.length; i++) {
    if (!(coords[i] instanceof google.maps.LatLng)) {
      if (coords[i].length > 0 && typeof(coords[i][0]) == "object") {
        coords[i] = arrayToLatLng(coords[i], useGeoJSON);
      }
      else {
        coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
      }
    }
  }

  return coords;
};
}

		var map = new GMaps({
			el: '#map',
			lat: -12.043333,
			lng: -77.028333
		});
		GMaps.geolocate({
			success: function(position){
				map.setCenter(position.coords.latitude, position.coords.longitude);
			},
			error: function(error){
				swal({
					title: "Error!",
					text: "Your browser could not confirm your location!",
					type: "error",
					confirmButtonText: "Try Again"
				});
			}
		})
	}
		var geo = navigator.geolocation;
		var success = function(position) {
			locationService.getLocation(position.coords.latitude, position.coords.longitude)
			.then(function(data) {
				console.log(data);
				$scope.road = data.address.road;
				$scope.city = data.address.city;
				$scope.state = data.address.state;

				swal({
					title: "We've got your current location at",
					text: $scope.road + $scope.city + $scope.state,
					type: "warning",
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "Yes, this is my current location, where the roadkill is at!",
					closeOnConfirm: false,
					showCancelButton: true,
				}, function(){
					swal("Tagged!", "The roadkill you reported has been marked.", "Success!"); 
				});

			// 	if(confirm("We've got your current location at " + $scope.road + $scope.city + $scope.state)){
			// 		console.log($scope.road + $scope.city + $scope.state)
			// 	} else {
			// 		success(position);
			// 	}
			// });
		}
		var error = function(err) {
			success();
		}

		var settings = {
			enableHighAccuracy: true,
			maximumAge: 1000 * 60 * 60
		}
		geo.getCurrentPosition(success, error, settings);
		navigator.geolocation.getCurrentPosition(show_map);
	}
	$scope.showMap = function show_map(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		console.log($scope.show_map(position));
	}
	
})

	// $scope.getLocation = function(){
	// 	console.log("got here");

	// 	}


