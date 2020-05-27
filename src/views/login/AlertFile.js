import auth from "../../Auth/Auth";
import { GetUser } from "../../Auth/SetUser";
import Cookies from 'js-cookie';

export const AlertFile = (res, props, data) => {
  if (res.data.success == "true") {
    Cookies.set('userName',data['username']);
    GetUser();
    
    auth.login(() => {
      props.history.push("/userpanel");
    });

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("userNameId").innerHTML = "";
    document.getElementById("passwordId").innerHTML = "";
  } else alert("Nie ma takiego konta lub złe hasło");
};
