import React, { Component } from "react";
import "./home-page.scss"

class Homepage extends Component{
    render(){
        return(
            <div className="page" id="homepage">
                <div className="menu">
                    <button className="btn btn-light">Dowiedz się więcej</button>
                    <button className="btn btn-secondary" >Zamieść ogłoszenie</button>
                    <button className="btn btn-primary">Znajdź pracę</button>
                </div>
                <div className="img"></div> 
                
            </div>
        );
    }
}

export default Homepage