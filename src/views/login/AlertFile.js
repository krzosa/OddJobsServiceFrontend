export function AlertFile(res) {
  if (res.data.success == "true") {
    alert("Zalogowano");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("userNameId").innerHTML = "";
    document.getElementById("passwordId").innerHTML = "";
  } else alert("Nie ma takiego konta lub złe hasło");
}
