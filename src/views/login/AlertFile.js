import auth from "../../Auth/Auth";
import { GetUser } from "../../Auth/SetUser";

export const AlertFile = (res, props, data) => {
  if (res.data.success == "true") {
    //alert("Zalogowano");
    GetUser(data);

    auth.login(() => {
      props.history.push("/userpanel");
    });

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("userNameId").innerHTML = "";
    document.getElementById("passwordId").innerHTML = "";
  } else alert("Nie ma takiego konta lub złe hasło");
};
