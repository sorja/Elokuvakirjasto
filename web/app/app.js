var MovieLibrary = angular.module('MovieLibrary', ['ngRoute', 'firebase']);

MovieLibrary.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);

MovieLibrary.config(function ($routeProvider) {
	$routeProvider.when('/', {
		controller: 'ListMoviesController',
		templateUrl: 'app/views/listmovies.html'
	}).
	when('/movies', {
		controller: 'ListMoviesController',
		templateUrl: 'app/views/listmovies.html'
	})
	.when('/movies/new', {
		controller: 'AddMovieController',
		templateUrl: 'app/views/newmovie.html'
	})
	.when('/movies/:id', {
		controller: 'ShowMovieController',
		templateUrl: 'app/views/movie.html'
	})
	.when('/search/:query', {
		controller: 'SearchMovieController',
		templateUrl: 'app/views/search.html'
	})
	.when('/movies/:id/edit', {
		controller: 'EditMovieController',
		templateUrl: 'app/views/editmovie.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
