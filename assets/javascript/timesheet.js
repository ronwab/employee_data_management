var config = {
    apiKey: "AIzaSyByI5K94sKwEKFbK3hzEUKtQRpPAVBCt9g",
    authDomain: "timesheet-2e5db.firebaseapp.com",
    databaseURL: "https://timesheet-2e5db.firebaseio.com",
    projectId: "timesheet-2e5db",
    storageBucket: "timesheet-2e5db.appspot.com",
    messagingSenderId: "991491215490"
};
firebase.initializeApp(config);

var database = firebase.database();

  $("#submit").on("click", function(event) {
    event.preventDefault();
  
    var empName = $("#name-input").val().trim();
    var empRole = $("#role-input").val().trim();
    var empStart = moment($("#date-input").val().trim(), "DD/MM/YY").format("X");
    var empRate = $("#rate-input").val().trim();
    var newEmp = {
      name: empName,
      role: empRole,
      start: empStart,
      rate: empRate
    };
  
    database.ref().push({
  
    name: $("#name-input").val(""),
    role: $("#role-input").val(""),
    date: $("#date-input").val(""),
    rate: $("#rate-input").val(""),

  });
  
  database.ref().on("child_added", function(childSnapshot) {
  

    var empName = childSnapshot.val().name;
    var empRole = childSnapshot.val().role;
    var empStart = childSnapshot.val().start;
    var empRate = childSnapshot.val().rate;
  
    var empStartClean = moment.unix(empStart).format("MM/DD/YY");
  
    var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  
    var empBilled = empMonths * empRate;
  
    $("#table-employee > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
    empStartClean + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
  });
  });