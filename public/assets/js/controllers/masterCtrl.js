angular.module ("TatianasOldies")
  .controller("MasterCtrl", function($scope,$firebaseAuth,$firebaseArray,$firebaseObject,$http,ngCart) {
    var ref = firebase.database().ref() // connect to database
    var store = ref.child('store-items')
    var stoItems = $firebaseArray(store)
    $scope.stoItems = stoItems;

    var cdRef = ref.child('store-items/cds') // calling the child element of store-items category of cds
    var cdItems = $firebaseArray(cdRef)
    // $scope.cdItems = cdItems;

    var gameRef = ref.child('store-items/games') // calling the child element of store-items category of games
    var gameItems = $firebaseArray(gameRef)
    // $scope.gameItems = gameItems;

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

  }) // end of controller
