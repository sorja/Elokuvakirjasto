var MovieLibrary = angular.module('MovieLibrary', ['ngRoute, firebase']);
MovieLibrary.config(function ($routeProvider) {
	$routeProvider.when('/', {
		controller: 'ListMoviesController',
		templateUrl: 'app/views/newmovie.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});