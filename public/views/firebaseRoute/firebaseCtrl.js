angular.module('roadKillReport').controller('firebaseCtrl', function($scope, $firebase, firebaseService) {

	$scope.post = function() {
		console.log("hello");
		firebaseService.post($scope.location, $scope.species);
		$scope.location = "";
		$scope.species = "";
	}
});