// Initialize Firebase
var config = {
    apiKey: "AIzaSyCVhrDBU4xOTOxIXSgG5smzWlPNqZl374U",
    authDomain: "portfolio-107e6.firebaseapp.com",
    databaseURL: "https://portfolio-107e6.firebaseio.com",
    projectId: "portfolio-107e6",
    storageBucket: "portfolio-107e6.appspot.com",
    messagingSenderId: "724122450167",
    appId: "1:724122450167:web:e6dcc15635c72cb4"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  //button to add new contact
  $("#add-contact-button").on("click", function(event) {
    event.preventDefault();
    //grab value from input boxes
    var contactName = $("#contact-name")
      .val()
      .trim();
    var contactEmail = $("#contact-email")
      .val()
      .trim();
    var message = $("#message")
      .val()
      .trim();
  
    //local "temp" object for holding contact data
    var newContact = {
      name: contactName,
      email: contactEmail,
      message: message
    };
    //sends contact data to firebase
    database.ref().push(newContact);
  
    //console log progess
    console.log(newContact.name);
    console.log(newContact.email);
    console.log(newContact.message);
  
    // clear text boxes
    $("#contact-name").val("");
    $("#contact-email").val("");
    $("#message").val("");
  });
  
//   //pulls information from firebase
//   database.ref().on("child_added", function(childSnapshot) {
//     console.log(childSnapshot.val());
//     var trainName = childSnapshot.val().name;
//     var destination = childSnapshot.val().destination;
//     var firstTrain = childSnapshot.val().first;
//     var frequency = childSnapshot.val().frequency;
//     var currentTime = moment();
//     var timeArr = firstTrain.split(":");
//     var trainTime = moment()
//       .hours(timeArr[0])
//       .minutes(timeArr[1]);
//     var firstTimeConverted = moment(trainTime, "HH:mm")
//     var timeDifference = moment().diff(moment(trainTime), "minutes");
//     var remainder = timeDifference % frequency;
//     var minutesTilNext = frequency - remainder;
//     var nextTrainTime = moment().add(minutesTilNext,"minutes");
//     var nextTrainTimeConverted = moment(nextTrainTime).format("hh:mm");
  
//     //check train values
//     console.log("Train Name: " + trainName);
//     console.log("Train Destination: " + destination);
//     console.log("First Train Time: " + firstTrain);
//     console.log("Frequency:" + frequency);
//     console.log("Current Time: " + moment(currentTime).format("hh:mm"));
//     console.log("Current Time Formatted: " + currentTime.format("LT"));
//     console.log(firstTimeConverted);
//     console.log("Time Difference: " + timeDifference);
//     console.log("Minutes til next train" + minutesTilNext);
//     console.log("Arrival Time: " + moment(nextTrainTime).format("hh:mm"));
  
//     var newRow = $("<tr>").append(
//       $("<td>").html(trainName),
//       $("<td>").html(destination),
//       $("<td>").html(frequency),
//       $("<td>").html(nextTrainTimeConverted),
//       $("<td>").html(minutesTilNext)
//     );
//     $("#train-table > tbody").append(newRow);
//   });
  