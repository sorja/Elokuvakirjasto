MovieLibrary.controller('EditMovieController',
	function ($scope, $location, $routeParams, FirebaseService) {
		var id = $routeParams.id;
		FirebaseService.getMovie(id, function(movie){
			$scope.movie = movie
		});

		$scope.editMovie = function(){
			FirebaseService.editMovie($scope.movie);			
			$location.path('/movies');
		};
});