import auth from "../../Auth/Auth";
import { GetUser } from "../../Auth/SetUser";
import Cookies from 'js-cookie';
import axios from 'axios';

export function AlertFile(data, email, password, passwordRepeat, checked,userName,props) {
  let elFirstName = document.getElementById("errorFirstName");
  let elLastName = document.getElementById("errorLastName");
  let elUserName = document.getElementById("errorUserName");
  let elPhoneNumber = document.getElementById("errorPhoneNumber");
  let elEmail = document.getElementById("errorEmail");
  let elPassword = document.getElementById("errorPassword");
  let elPasswordRepeat = document.getElementById("errorPasswordRepeat");
  let elChecked = document.getElementById("errorChecked");

  if (data.length > 0) {
    //walidacja imienia
    if (data.includes("firstName is too short"))
      elFirstName.innerHTML = "Imie jest za krótkie";
    else if (data.includes("firstName is too long"))
      elFirstName.innerHTML = "Imie jest za długie";
    else if (data.includes("firstName contains illegal character"))
      elFirstName.innerHTML = "Nieprawidłowe znaki";
    else elFirstName.innerHTML = "";

    //walidacja nazwiska
    if (data.includes("lastName is too short"))
      elLastName.innerHTML = "Nazwisko jest za krótkie";
    else if (data.includes("lastName is too long"))
      elLastName.innerHTML = "Nazwisko jest za długie";
    else if (data.includes("lastName contains illegal character"))
      elLastName.innerHTML = "Nieprawidłowe znaki";
    else elLastName.innerHTML = "";

    //walidacja uzytkownika
    if (data.includes("username is too short"))
      elUserName.innerHTML = "Nazwa użytkownika jest za krótka";
    else if (data.includes("username is too long"))
      elUserName.innerHTML = "Nazwa użytkownika jest za długa";
    else if (data.includes("User with given username already exists"))
      elUserName.innerHTML = "Użytkownik o podanej nazwie użytkownika istnieje"
    else elUserName.innerHTML = "";

    //walidacja telefonu
    if (data.includes("phone number too short"))
      elPhoneNumber.innerHTML = "Numer telefonu jest za krótki";
    else if (data.includes("phone number too long"))
      elPhoneNumber.innerHTML = "Numer telefonu jest za długi";
    else if(data.includes("User with given phone number already exists"))
      elPhoneNumber.innerHTML = "Użytkownik o podanym numerze telefonu istnieje";
    else elPhoneNumber.innerHTML = "";

    //walidacja hasła
    if (data.includes("password is too short"))
      elPassword.innerHTML = "Hasło jest za krótkie";
    else if (data.includes("password is too long"))
      elPassword.innerHTML = "Hasło jest za długie";
    else elPassword.innerHTML = "";

    //walidacja email
    if (!email) elEmail.innerHTML = "Uzupełnij email";
    else if (data.includes("User with given email already exists"))
      elEmail.innerHTML = "Użytkownik o podanym adresie email istnieje";
    else elEmail.innerHTML = "";

    //walidacja hasel
    if (password != "" && passwordRepeat == "")
      elPasswordRepeat.innerHTML = "Powtórz hasło";
    else elPasswordRepeat.innerHTML = "";

    if (password != passwordRepeat)
      elPasswordRepeat.innerHTML = "Niezgodne hasła";
    else elPasswordRepeat.innerHTML = "";

    //walidacja checkbox
    if (!checked) elChecked.innerHTML = "Zaznacz oświadczenie";
    else elChecked.innerHTML = "";

    alert("Nie zarejestrowano");
  } else {
    alert("Zarejestrowano");
    Cookies.set('userName',userName);
    GetUser();
    auth.login(() => {
      props.history.push("/userpanel");
    });


    axios
        .post("http://149.156.146.249:60021/api/login", {username: userName, password: password}, {
          withCredentials: true,
        })
        .catch((err) => {
          if (err.length > 0) console.log(err);
        });

    //czyszczenie pól
    elFirstName.innerHTML = "";
    elLastName.innerHTML = "";
    elUserName.innerHTML = "";
    elPhoneNumber.innerHTML = "";
    elEmail.innerHTML = "";
    elPassword.innerHTML = "";
    elPasswordRepeat.innerHTML = "";
    elChecked.innerHTML = "";

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordRepeat").value = "";
  }
}
