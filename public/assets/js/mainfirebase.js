angular.module ("TatianasOldies", ["ngRoute","firebase","ngCart","paypal-button"])
    .config(function () {
      var config = {
        apiKey: "AIzaSyCog54WPstrB9z2c2bfFxRhEB1112GuFAQ",
        authDomain: "tatianasoldskool.firebaseapp.com",
        databaseURL: "https://tatianasoldskool.firebaseio.com",
        storageBucket: "tatianasoldskool.appspot.com",
        messagingSenderId: "777125319078"
      };
      firebase.initializeApp(config);
    })
