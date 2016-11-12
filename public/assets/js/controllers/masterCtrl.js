angular.module ("TatianasOldies")
  .controller("MasterCtrl", function($scope,$firebaseAuth,$firebaseArray,$firebaseObject) {
    var ref = firebase.database().ref() // connect to database
    var cdRef = ref.child('store-items/cds') // calling the child element of store-items category of cds
    var cdItems = $firebaseArray(cdRef)
    $scope.cdItems = cdItems;

    var gameRef = ref.child('store-items/games') // calling the child element of store-items category of games
    var gameItems = $firebaseArray(gameRef)
    $scope.gameItems = gameItems;


    $scope.signInUser = function () { // assigning an auth property
      firebase.auth().signInAnonymously().catch(function(error) { // signing in the user without having them physically sign in
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/operation-not-allowed') {
          alert('You must enable Anonymous auth in the Firebase Console.');
        } else {
          console.error(error);
        }
      }); //end of signInAnonymously function

      firebase.auth().onAuthStateChanged(function(user) { // begging of onAuthStateChanged function
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous; // asking if user is anonymous or not
          var uid = user.uid;
          console.log("user is signed in as " + user.uid + "and is " + user.isAnonymous)

          var usersRef = ref.child('users/' + user.uid) // calling the child element of users
          var users = $firebaseObject(usersRef)
          $scope.users = users;

          users.userInformation = (user.uid)
          users.$save().then(function(usersRef) {
           console.log("user id saved into database as: " + user.uid);
          })
        } else {
          console.log("user is signed out")
        }
      });  // end of onAuthStateChanged function
    } //end of signInUser function


    //Adding user to database
          //
          // obj.userInformation = { firstname: $scope.firstname, lastname: $scope.lastname, email: $scope.email, password: $scope.password, username: $scope.username }
          // obj.$save().then(function(usersRef) {
          // ref.key() === obj.$id
          // });



  }) // end of controller