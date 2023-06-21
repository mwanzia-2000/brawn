alert("WELCOME TO MY WEBAPP!\nEnjoy❤");

// script.js

document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
  // Get the form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var message = document.getElementById("message").value;
  
  // Send the booking details via email
  var mailtoLink = "mailto:brianmwanzia199@gmail.com" +
                   "?subject=New Booking" +
                   "&body=Name: " + name + "%0D%0A" +
                   "Email: " + email + "%0D%0A" +
                   "Date: " + date + "%0D%0A" +
                   "Message: " + message;
  
  window.location.href = mailtoLink; // Open the default email client with the pre-filled details
});