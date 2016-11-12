angular.module ("TatianasOldies")
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider.when("/", {
      templateUrl: "parts/store.html",
      controller: "MasterCtrl",
    }).when("/cart", {
      templateUrl: "parts/cart.html",
      controller: "MasterCtrl",
    }).when("/checkout", {
      templateUrl: "parts/checkout.html",
    })
    .otherwise({
      redirectTo: "/"
    })
  })
