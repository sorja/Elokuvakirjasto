MovieLibrary.controller('ListMoviesController',
	function ($scope, $location, FirebaseService) {
    $scope.movies = FirebaseService.getMovies();
    $scope.delMovie = function(movie){
    	FirebaseService.removeMovie(movie);
    }
    $scope.search = function(){
    	var valid = $scope.searchform.$valid ;
    	if(valid){
    		$location.path('/search/'+$scope.query)
    	}
    }
});