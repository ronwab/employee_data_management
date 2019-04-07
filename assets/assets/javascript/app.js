$(document).ready(function () {

    var name;
    var position;
    var startDate = 0
    var wage = 0


    var config = {
        apiKey: "AIzaSyBRKR4biyQnAmQlbX71l1vWPN2CiEpwwZY",
        authDomain: "gtcbc-91325.firebaseapp.com",
        databaseURL: "https://gtcbc-91325.firebaseio.com",
        projectId: "gtcbc-91325",
        storageBucket: "gtcbc-91325.appspot.com",
        messagingSenderId: "646521131763"
    };
    firebase.initializeApp(config);

    database = firebase.database()

    $("#submit-button").on("click", function (e) {
        e.preventDefault()
        name = $("#name-input").val().trim();
        position = $("#position-input").val().trim();
        startDate = $("#startDate-input").val().trim();
        wage = $("#wage-input").val().trim();

        //Why cant I make employee global??
        var employee = {
            userName: name,
            userPositin: position,
            userStartDate: startDate,
            userWage: wage
        }

        database.ref().push(employee)
        // database.ref().push({
        //     userName: name,
        //     userPositin: position,
        //     userStartDate: startDate,
        //     userWage: wage
        // })

        //clear the data
        $("#name-input").val(" ");
        $("#position-input").val(" ");
        $("#startDate-input").val(" ");
        $("#wage-input").val(" ");

    })

    database.ref().on("child_added", function (childsnapshot) {

        // console.log("hello1");
        // console.log(childsnapshot.val().userName);
        // console.log(childsnapshot.val().userPositin);
        // console.log(childsnapshot.val().userStartDate);
        // console.log(childsnapshot.val().userWage);

        $("#full-member-list").append("<div class='well'><span class='member-name'> " +
            childsnapshot.val().userName +

            " </span><span id='User-position'> " + childsnapshot.val().userPositin +
            " </span><span id='User-startDate'> " + childsnapshot.val().userStartDate +
            " </span><span id='User-wage'> " + childsnapshot.val().userWage +
            " </span></div>");

    })
    var emptyStartPrety = moment.unix(startDate).format("MM/DD/YYYY");
    var empMonths = moment().diff(moment(startDate, "X"), "months");
    console.log(`employee Months ${empMonths}`)

    var billedMonths = empMonths * wage;
    console.log(`billed Months ${billedMonths}`);

    var newRows = $('<tr>').append(
        $('<tr>').text(userPositin),
        $('<tr>').text(userStartDate),
        $('<tr>').text(userWage)
    )
    $('#employee-table>tbody').append(newRows)


})