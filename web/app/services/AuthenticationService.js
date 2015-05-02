MovieLibrary.service('AuthenticationService', function($firebase, $firebaseAuth){
  var url = 'https://flickering-heat-2644.firebaseio.com/';
  
  var firebaseRef = new Firebase(url);
  var firebaseAuth = $firebaseAuth(firebaseRef); 

  this.logUserIn = function(email, password){
    return firebaseAuth.$authWithPassword({
      email: email,
      password: password
    });
  }

  this.createUser = function(user){
    return firebaseAuth.$createUser({
      email: user.email,
      password: user.password
    });
  }

  this.checkLoggedIn = function(){
    return firebaseAuth.$waitForAuth();
  }

  this.logUserOut = function(){
    return firebaseAuth.$unauth();
  };

  this.getUserLoggedIn = function(){
    return firebaseAuth.$getAuth();
  }

});
