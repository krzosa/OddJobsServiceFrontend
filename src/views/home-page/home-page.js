import React, { Component } from "react";
import "./home-page.scss"

class Homepage extends Component{
    render(){
        return(
            <div className="page" id="homepage">
                <div className="menu">
                    <button type = 'submit' className="btn btn-light" ><a href="login">Moje konto</a></button>
                    <button type = 'submit' className="btn btn-secondary" ><a href="addoffers">Zamieść ogłoszenie</a></button>
                    <button type = 'submit' className="btn btn-info" ><a href="praca">Znajdź pracę</a></button>
                </div>
                <div className="img"></div> 
                
            </div>
        );
    }
}

export default Homepage