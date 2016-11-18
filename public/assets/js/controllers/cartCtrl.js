angular.module("TatianasOldies")
  .controller("CartCtrl", function($scope,$firebaseAuth,$firebaseArray,$firebaseObject,$location) {
    var ref = firebase.database().ref() // connect to database
    firebase.auth().onAuthStateChanged(function(user) { // begging of onAuthStateChanged function
      if (user) {
        var cartRef = ref.child('users/' + user.uid)
        var cartItems = $firebaseArray(cartRef)
        $scope.cartItems = cartItems;
      } else {
        console.log("user is signed out")
      }
    })  // end of onAuthStateChanged function

    // Remove from database
    $scope.removeEntry = function(entry) {
      $scope.cartItems.$remove(entry).then(function(ref) {
        console.log("removed item from cart");
      });
    }

    $scope.goToCheckout = function($scope) {
      $location.path('/checkout');
    }
  }) // end of controller
