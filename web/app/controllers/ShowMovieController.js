MovieLibrary.controller('ShowMovieController',
	function ($scope, $location, $routeParams, FirebaseService) {
		var id = $routeParams.id;
		FirebaseService.getMovie(id, function(movie){
			$scope.movie = movie
		});

		$scope.editMovie = function(){
			var url = '/movies/'+id+'/edit';
			console.log(url)
			$location.path(url);
		};
});
