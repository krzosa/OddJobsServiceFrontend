import user from './User';
import axios from 'axios';
import Cookies from 'js-cookie';

export function GetUser(){
    axios.get("http://149.156.146.249:60021/api/users/" + Cookies.get('userName'))
    .then(res => setUser(res));
}

function setUser(res){
    user.setFirstName(res.data.firstName);
    user.setLastName(res.data.lastName);
    user.setUserName(res.data.username);
    user.setEmail(res.data.email);
    user.setPhoneNumber(res.data.phoneNumber);
    user.setUserId(res.data.userId);
    user.setPassword(res.data.password);    
}