MovieLibrary.service('FirebaseService', function ($firebase) {

	var url = 'https://flickering-heat-2644.firebaseio.com/';

	var firebaseRef = new Firebase(url+"/movielibrary");
	var sync = $firebase(firebaseRef);
	var movies = sync.$asArray();

	this.getMovies = function () {
		return movies;
	};

	this.addMovie = function (movie) {
		movies.$add(movie);
	};

	this.editMovie = function (movie) {
		movies.$save(movie);
	}

	this.removeMovie = function (movie) {
		movies.$remove(movie);
	}

	this.getMovie = function(key, done){
		movies.$loaded(function(){
			done(movies.$getRecord(key));
		});
	}
});
