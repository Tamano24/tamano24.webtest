function checkLogin() {
  var enteredUsername = document.getElementById("username").value;
  var enteredPassword = document.getElementById("password").value;
  var correctUsername = "admin"; // Replace with the correct username
  var correctPassword = "password"; // Replace with the correct password

  if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    window.location.href = "./HomePage/Homepage.html"; // Replace with the desired next page
  } else {
    document.getElementById("message").innerHTML = "Incorrect username or password!";
  }
}
