export function FunctionRegistration(
  firstName,
  lastName,
  userName,
  phoneNumber,
  email,
  password,
  passwordRepeat,
  checked
) {
  let elFirstName = document.getElementById("errorFirstName");
  let elLastName = document.getElementById("errorLastName");
  let elUserName = document.getElementById("errorUserName");
  let elPhoneNumber = document.getElementById("errorPhoneNumber");
  let elEmail = document.getElementById("errorEmail");
  let elPassword = document.getElementById("errorPassword");
  let elPasswordRepeat = document.getElementById("errorPasswordRepeat");
  let elChecked = document.getElementById("errorChecked");

  if (
    checked == false ||
    email == "" ||
    firstName == "" ||
    lastName == "" ||
    userName == "" ||
    phoneNumber == "" ||
    password == "" ||
    passwordRepeat == "" ||
    password != passwordRepeat
  ) {
    if (!firstName) elFirstName.innerHTML = "Uzupełnij imię";
    else elFirstName.innerHTML = "";

    if (!lastName) elLastName.innerHTML = "Uzupełnij nazwisko";
    else elLastName.innerHTML = "";

    if (!userName) elUserName.innerHTML = "Uzupełnij nazwę użytkownika";
    else elUserName.innerHTML = "";

    if (!phoneNumber) elPhoneNumber.innerHTML = "Uzupełnij numer telefonu";
    else elPhoneNumber.innerHTML = "";

    if (!email) elEmail.innerHTML = "Uzupełnij email";
    else elEmail.innerHTML = "";

    if (!password) elPassword.innerHTML = "Uzupełnij hasło";
    else elPassword.innerHTML = "";

    if (password != "" && passwordRepeat == "")
      elPasswordRepeat.innerHTML = "Powtórz hasło";
    else elPasswordRepeat.innerHTML = "";

    if (password != passwordRepeat)
      elPasswordRepeat.innerHTML = "Niezgodne hasła";
    else elPasswordRepeat.innerHTML = "";

    if (!checked) elChecked.innerHTML = "Zaznacz oświadczenie";
    else elChecked.innerHTML = "";

    return false;
  } else {
    return true;
  }
}
