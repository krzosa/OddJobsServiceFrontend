import Cookies from 'js-cookie';
import user from "../../Auth/User";

export function CreateData(passwordChange){
    let data;
    if(passwordChange){
        data = {
          firstName: user.getFirstName(),
          lastName: user.getLastName(),
          email: user.getEmail(),
          password: user.getPassword(),
          phoneNumber: user.getPhoneNumber(),
          username: Cookies.get('userName'),
        }}
        else{
        data = {
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
            phoneNumber: user.getPhoneNumber(),
            username: Cookies.get('userName'),
        }
      }
    return data;
    
}