import React, { Component } from "react";

class Login extends Component{
    render(){
        return(
            <div className="container content">
                <div className="form-check my-5">
                    {/* <div className="col-12 text-center my-5" >
                        <button className="btn btn-info btn-lg mx-2" type="submit"> Zaloguj się </button>
                        
                        <button className="btn btn-info btn-lg mx-2" type="submit" disabled> Rejestracja </button>
                    
                    </div> */}

                    <div className="form-group col-12 my-3 text-center mb-4">
                        <input type="email" className="text-center col-8 col-md-6 col-lg-4" id="email" placeholder="Wpisz Email"></input>
                    </div>

                    <div className="form-group col-12 my-3 text-center mb-4">
                        <input type="password" className="text-center col-8 col-md-6 col-lg-4" id="pass" placeholder="Wpisz hasło"></input>
                    </div>

                    <div className="form-group col-12 my-3 text-center mb-4">
                        <input type="checkbox" className="form-check-input ml-1" id="przykladowyCheckbox"></input>
                        <label className="form-check-label col-8 col-md-6 col-lg-4" for="przykladowyCheckbox">Zapamiętaj mnie</label>
                    </div>
                    
                    <div className="col-12 text-center" >
                    <button type="submit" className="btn btn-primary col-8 col-md-6 col-lg-4 mb-5 ">Zaloguj się</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}



export default Login