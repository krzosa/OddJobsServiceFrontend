import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import auth from "../Auth/Auth";

import Login from '../views/login/Login';

export const ProtectedRoute = ({component: Component, ...rest}) => {
return(    
    <Route {...rest} render={
        (props) =>{
            if(auth.isAuthenticated() == true){
                return <Component {...props}/>
            }
            else{
                return <Login />    
            }
        }
    }/>
)
}