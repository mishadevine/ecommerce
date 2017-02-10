angular.module ("TatianasOldies")
  .controller("MasterCtrl", function($scope,$firebaseAuth,$firebaseArray,$firebaseObject,$http,ngCart) {
    var ref = firebase.database().ref() // connect to database
    var store = ref.child('store-items')
    var stoItems = $firebaseArray(store)
    $scope.stoItems = stoItems;

    var cdRef = ref.child('store-items/cds') // calling the child element of store-items category of cds
    var cdItems = $firebaseArray(cdRef)

    var gameRef = ref.child('store-items/games') // calling the child element of store-items category of games
    var gameItems = $firebaseArray(gameRef)

    // var usersRef = ref.child('users/') // calling the child element of users
    // var users = $firebaseObject(usersRef)
    // $scope.users = users;

    ngCart.setTaxRate(7.5);
    ngCart.setShipping(0);

    gameItems.$loaded()
   .then(function(){
        angular.forEach(gameItems, function(value, key) {
          switch (value.id) {
            case "game0":
              value.image = 'assets/img/11-games_44.jpg';
              break;
            case "game1":
              value.image = 'assets/img/playstationgames.jpg';
              break;
            case "game2":
                value.image = 'assets/img/mario-kartwii.jpg';
              break;
            default:

          }
          return $scope.gameItems = gameItems;
        });
      })
      .catch(function(error){
        console.log('Error:',error);
      });


      cdItems.$loaded()
     .then(function(){
          angular.forEach(cdItems, function(value, key) {
            switch (value.id) {
              case "cd0":
                value.image = 'assets/img/BowWowCD.png';
                break;
              case "cd1":
                value.image = 'assets/img/faithhillcd.png';
                break;
              case "cd2":
                  value.image = 'assets/img/dc-cd.png';
                break;
              default:

            }
            return $scope.cdItems = cdItems;
          });
        })
        .catch(function(error){
          console.log('Error:',error);
        });

    var items;

//     $scope.signInUser = function () { // assigning an auth property
//       firebase.auth().signInAnonymously().catch(function(error) { // signing in the user without having them physically sign in
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//
//         if (errorCode === 'auth/operation-not-allowed') {
//           alert('You must enable Anonymous auth in the Firebase Console.');
//         } else {
//           console.error(error);
//         }
//       }); //end of signInAnonymously function
//
//       firebase.auth().onAuthStateChanged(function(user) { // begging of onAuthStateChanged function
//         if (user) {
//           // User is signed in.
//           var isAnonymous = user.isAnonymous; // asking if user is anonymous or not
//           var uid = user.uid;
//           console.log("user is signed in as " + user.uid + "and is " + user.isAnonymous)
//
//           var usersRef = ref.child('users/' + user.uid) // calling the child element of users
//           var users = $firebaseObject(usersRef)
//           $scope.users = users; // calling the users database
//
//           // users.userInformation = { userID: user.uid,title: $scope.gameItems[0].title, details: $scope.gameItems[0].details, price: $scope.gameItems[0].price }
//           users.userInformation = { userID: user.uid }
//
//           users.$save().then(function(usersRef) {
//            console.log("user id saved into database as: " + user.uid);
//          })
//
//         // Add to database
//
//           //  users.$add($scope.store).then(function(usersRef) {
//           //    console.log("added item to users database");
//           //  });
//
//
//
//         } else {
//           console.log("user is signed out")
//         }
//       });  // end of onAuthStateChanged function
//     } //end of signInUser function
// // $scope.users = users;
//     // Add to database
//     // $scope.addNewItem = function() {
//     //   $scope.users.$add($scope.store).then(function(ref) {
//     //     // $scope.newMovie = {};
//     //     console.log("added item");
//     //   });
//     // }
//
//     // Add cart item to database
//     //  $scope.addCartItem = function(item) {
//     //    console.log(item);
//      //
//     //  }
//      // Remove from database

  }) // end of controller
