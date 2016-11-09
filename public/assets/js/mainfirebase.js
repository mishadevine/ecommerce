angular.module ("TatianasOldies", ["firebase","ngRoute","ngMessages"])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "parts/store.html",
        controller: "MasterCtrl",
      }).when("/cart", {
        templateUrl: "parts/cart.html",
        controller: "MasterCtrl",
      }).when("/checkout", {
        templateUrl: "parts/checkout.html",
      })
      .otherwise("/");
    }])
    .controller("MasterCtrl", function($scope,$firebaseArray,$firebaseObject) {
      var ref = new Firebase("https://tatianasoldskool.firebaseio.com/") // connecting to the database
      var URL = "https://tatianasoldskool.firebaseio.com/store-items/cds";
      var cdItemsRef = new Firebase(URL);
      cdItems = $firebaseArray(cdItemsRef);
      $scope.cdItems = cdItems;

      // var ref = new Firebase("https://tatianasoldskool.firebaseio.com/") // connecting to the database
      var URL = "https://tatianasoldskool.firebaseio.com/store-items/games";
      var gameItemsRef = new Firebase(URL);
      gameItems = $firebaseArray(gameItemsRef);
      $scope.gameItems = gameItems;

    })
