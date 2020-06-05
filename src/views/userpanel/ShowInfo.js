export function ShowInfo(data) {
  let elFirstName = document.getElementById("errorFirstName");
  let elLastName = document.getElementById("errorLastName");
  let elPhoneNumber = document.getElementById("errorPhoneNumber");
  let elPassword = document.getElementById("errorPassword");

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
  }
  else{
    alert("Pomyślna zmiana");

    //czyszczenie pól
    elFirstName.innerHTML = "";
    elLastName.innerHTML = "";
    elPhoneNumber.innerHTML = "";
    elPassword.innerHTML = "";
    }
}
