// Initialize Firebase
var config = {
    apiKey: "AIzaSyCVhrDBU4xOTOxIXSgG5smzWlPNqZl374U",
    authDomain: "portfolio-107e6.firebaseapp.com",
    databaseURL: "https://portfolio-107e6.firebaseio.com",
    projectId: "portfolio-107e6",
    storageBucket: "portfolio-107e6.appspot.com",
    messagingSenderId: "724122450167"
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