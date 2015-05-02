MovieLibrary.controller('UserController', function($scope, $location, AuthenticationService){

  $scope.logIn = function(){
    if(!$scope.login.$valid){
      return;
    }
    AuthenticationService.logUserIn($scope.user.email, $scope.user.password)
    .then(function(){
      $location.path('/movies');
    })
    .catch(function(){
      $scope.message = 'Väärä sähköpostiosoite tai salasana!'
    });

  }

  $scope.register = function(){
    if(!$scope.login.$valid){
      return;
    }
    AuthenticationService.createUser($scope.user)
    .then(function(){
      AuthenticationService.logUserIn($scope.user.email, $scope.user.password)
      .then(function(){
        $location.path('/movies');
      });
    })
    .catch(function(){
      $scope.message = 'Tapahtui virhe! Yritä uudestaan';
    });
  }
});
