var firebaseConfig = {
  apiKey: "AIzaSyBob15vJF-aHVOkIJ2eGf_E7kW7pe4mBCo",
  authDomain: "time-sheet-baa68.firebaseapp.com",
  databaseURL: "https://time-sheet-baa68.firebaseio.com",
  projectId: "time-sheet-baa68",
  storageBucket: "time-sheet-baa68.appspot.com",
  messagingSenderId: "969988699336",
  appId: "1:969988699336:web:0c5e86a5e0cf85a827a1fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
var db = firebase.database();
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
    db.ref().push(newContact);
  
    //console log progess
    console.log(newContact.name);
    console.log(newContact.email);
    console.log(newContact.message);
  
    // Alert
    alert("Message Sent");

 // Clears all of the text-boxes
 $("#contact-name").val("");
 $("#contact-email").val("");
 $("#message").val("");
});


var forEach = function(t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

