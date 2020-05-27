import React, { Component } from "react";
import "./home-page.scss"

class Homepage extends Component{
    render(){
        return(
            <div className="page" id="homepage">
                <div className="menu">
                    <a href="login" className="btn btn-light" type="submit">Logowanie/Rejestracja </a>
                    <a href="addoffers" className="btn btn-secondary" type="submit">Zamieść ogłoszenie</a>
                    <a href="praca" className="btn btn-primary" type="submit">Znajdź pracę</a>
                </div>
                <div className="img"></div> 
                
            </div>
        );
    }
}

export default Homepage