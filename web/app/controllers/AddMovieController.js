MovieLibrary.controller('AddMovieController',
	function ($scope, $location, FirebaseService) {
    $scope.addMovie = function (movie) {
		if($scope.movieform.$valid){
			FirebaseService.addMovie($scope.movie);
			$scope.movieform.$setPristine();
			$scope.movie = {};
			$location.path('/movies');
		}
	}
});