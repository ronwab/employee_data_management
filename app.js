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

db.ref().on("child_added", function(childSnapshot) {

  // Log everything that's coming out of snapshot
  console.log(childSnapshot.val().name);
  console.log(childSnapshot.val().position);
  console.log(childSnapshot.val().date);
  console.log(childSnapshot.val().wage);

  // full list of items to the well
  $("#full-member-list").append(
    "<div class='well'>Name:<span class='employee-name'> " + childSnapshot.val().name,
    " </span>Position:<span class='employee-position'> " + childSnapshot.val().position,
    " </span>Date:<span class='employee-date'> " + childSnapshot.val().date,
    " </span>Wage:<span class='employee-wage'> " + childSnapshot.val().wage,
    " </span></div>");

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

var empMonths = moment

