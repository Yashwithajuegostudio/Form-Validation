function validateForm() {
  let email = document.form.email.value;
  let phoneNo = document.form.mobile.value;
  let password = document.form.password.value;

  if (phoneNo == "" || email == "" || password == "") {
    alert("Field can't be blank");
    return false;
  } else if (validateEmail(email)) {
    alert("Invalid email address!");
    return false;
  } else if (validatePhoneNo(phoneNo)) {
    alert("Phone number must be 10 digits.");
    return false;
  } else if (validatePassword(password)) {
    alert("Password must be at least 6 characters long.");
    return false;
  } else {
    alert("Form submitted successfully");
    return true;
  }
}
function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return false;
  } else {
    return true;
  }
}

function validatePassword(input) {
  if (input.length < 6) {
    return true;
  } else {
    return false;
  }
}
function validatePhoneNo(input) {
  var phoneNo = /^\d{10}$/;
  if (input.match(phoneNo) && input.length <= 10) {
    return false;
  } else {
    return true;
  }
}
