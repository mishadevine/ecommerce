angular.module ("TatianasOldies", ["firebase","ngRoute","ngMessages"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "parts/home.html",
    }).when("/store", {
      templateUrl: "parts/store.html",
    }).when("/cart", {
      templateUrl: "parts/cart.html",
    })
    .otherwise("/");
  }])
  .controller("MasterCtrl", function() {

  })
