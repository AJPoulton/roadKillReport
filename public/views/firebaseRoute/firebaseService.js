angular.module('roadKillReport').service('firebaseService', function($firebase){
	
	var roadkill = $firebase(new Firebase("https://roadkill-report.firebaseio.com/roadkill"));
	//var users = $firebase(new Firebase("https://roadkill-report.firebaseio.com/users"));

	this.post = function(getLocation, getAnimal) {
		roadkill.$push({location: getLocation, species: getAnimal});
	};

	//this.whatever = a function that does the same as above. {
	//	users.$push
	//}
});