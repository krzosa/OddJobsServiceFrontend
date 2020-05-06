export function FunctionLogin(userName,password){
    let elUserName = document.getElementById('userNameId');
    let elPassword = document.getElementById('passwordId');

    if( (userName == '') || (password == '') ){
        if(userName == '')
            elUserName.innerHTML = "Uzupełnij nazwę użytkownika";
        else
            elUserName.innerHTML = "";

        if(password == '')
            elPassword.innerHTML = "Uzupełnij hasło";
        else
            elPassword.innerHTML = "";
        return false;
    }
    else
        return true;

   
}