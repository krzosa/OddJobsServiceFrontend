import React, { Component } from "react";
import "./Body.scss"

class Body extends Component{
    render(){
        return(
            <div className="page">
                <div className="menu">
                    <button className="btn btn-light" onClick={MEMESACTIVATED}>Wszystko OK</button>
                    <button className="btn btn-secondary" onClick={BIGMEMES}>NO I ZAJEBISCIE</button>
                    <button className="btn btn-primary" onClick={MEMESSUPREME}>MEMY DEFINUJA ZYCIE</button>
                </div>
                <div className="img"></div> 
                
            </div>
        );
    }
}
//<img src={require("./img.jpg")} alt="aa"/>

// https://restcountries.eu/rest/v2/name/united
async function MEMESACTIVATED(){
    const url = "http://149.156.146.249:60021/users/Michal"
    const response = await fetch(url, {
        'Content-Type': "application/json",
        'cors': "JEBACcors"
    })
    const data = await response.json()
    console.log(response)
}

function BIGMEMES(){
  fetch('http://149.156.146.249:60021/users/Michal')
  .then(response => response.json())
  .then(MICHALTOJESTGOSC => console.log(MICHALTOJESTGOSC));
}


function MEMESSUPREME(){
  fetch('api/users/Michal')
  .then(response => response.json())
  .then(MICHALTOJESTGOSC => console.log(MICHALTOJESTGOSC));
}


export default Body