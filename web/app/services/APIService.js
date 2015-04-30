MovieLibrary.service('APIService', function($http){
	var url = 'http://www.omdbapi.com';
  this.findMovie = function(name){
    return $http.get(url, { params: { s: name } });
  }
});