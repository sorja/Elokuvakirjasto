MovieLibrary.controller('SearchMovieController',
	function ($scope, $routeParams, APIService) {
		var query = $routeParams.query;
		// unncessary

		APIService.findMovie(query).success(function(movies){
			$scope.movies=movies;
			console.log(movies.search)
		});
});