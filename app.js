 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCLrtq5JwyULD4R6Dc_Mb_YbryzceS9mJs",
    authDomain: "gtcbc-coding.firebaseapp.com",
    databaseURL: "https://gtcbc-coding.firebaseio.com",
    projectId: "gtcbc-coding",
    storageBucket: "gtcbc-coding.appspot.com",
    messagingSenderId: "46793546586"
  };
  firebase.initializeApp(config);


// Assign the reference to the database to a variable named 'database'
// var database = ...
var db = firebase.database();

$("#add-user").on("click", function(event) {
  // Don't refresh the page!
  event.preventDefault();

  // YOUR TASK!!!

  // Code in the logic for storing and retrieving the most recent user.
  db.ref().push({
    name: $('#name-input').val(),
    position: $('#position-input').val(),
    date: $('#date-input').val(),
    wage: $('#wage-input').val(),

  });
  // Don't forget to provide initial data to your Firebase database.

});
