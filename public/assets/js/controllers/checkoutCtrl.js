angular.module("TatianasOldies")
  .controller("CheckoutCtrl", function($scope,$firebaseAuth,$firebaseArray,$location) {
    var ref = firebase.database().ref() // connect to database
    firebase.auth().onAuthStateChanged(function(user) { // begging of onAuthStateChanged function
      if (user) {
        var cartRef = ref.child('users/' + user.uid)
        var cartItems = $firebaseArray(cartRef)
        $scope.cartItems = cartItems;
      } else {
        console.log("user is signed out")
      }
      $scope.goToCheckout = function($scope) {
        $location.path('/checkout');
      }
    })  // end of onAuthStateChanged function
  }) // end of controller
