class validation {
  firstName = (event) => {
    let nameRegex = new RegExp("^[A-Z][a-zA-Z]{2,}");
    if (nameRegex.test(event.target.value)) {
      return true;
    }
  };
  LastName = (event) => {
    let nameRegex = new RegExp("^[A-Z][a-zA-Z]{2,}");
    if (nameRegex.test(event.target.value)) {
      return true;
    }
  };
  email = (event) => {
    let emailRegex = RegExp(
      "^[a-zA-Z0-9-_+]+(\\.?[a-zA-Z0-9-_]+)@[a-zA-Z0-9-_]+\\.[a-zA-Z]{2,}(\\.?[a-zA-Z-_]+)$"
    );
    if (emailRegex.test(event.target.value)) {
      return true;
    }
  };
  password = (event) => {
    let password = RegExp("^(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$");
    if (password.test(event.target.value)) {
      return true;
    }
  };
}

module.exports = new validation();
