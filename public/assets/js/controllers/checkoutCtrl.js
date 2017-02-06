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

    // Add the props needed to your $scope

      // $scope.env = {
      //   'production', // Optional: specify 'sandbox' environment
      // }

      $scope.client = {
        sandbox:    'Acc1FhXZmc7YGyyh1CaEpBQFvm7WeXHeOT0w4_qFQHN-Q4eba2oMdoLYAuNyEIlnCZ2aEpKhay-JzztR', // from https://developer.paypal.com/developer/applications/
        production: 'AVX1JkuwuF2taI8WYzH7tQrMffZkpM5LCB6j8QWkxl3wnXmpXrlJnClc2v2penjPONBAv7S59TtrMOkF'  // from https://developer.paypal.com/developer/applications/
      };

      commit: true,

      $scope.payment = function() {
        return paypal.rest.payment.create(this.props.env, this.props.client, {
            transactions: [
                {
                    amount: {
                        total:  '0.02', //$scope.price
                        currency: 'USD'
                    }
                }
            ]
        });
      };

      $scope.onAuthorize = function(data, actions) {
        return actions.payment.execute().then(function() {
            console.log('The payment was completed!');
            window.location = "/payment";
        });
      };

      $scope.onCancel = function(data) {
          console.log('The payment was cancelled!');
      }
  }) // end of controller
