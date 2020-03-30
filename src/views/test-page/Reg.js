import React, { Component } from "react";

class Registration extends Component{
    render(){
        return(
            <div className="container">
                <div className="form-check">
                    <div class="col-12 text-center my-5" >
                        <button class="btn btn-info btn-lg" type="submit"> Zaloguj się </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                        <button class="btn btn-info btn-lg" type="submit"> Rejestracja </button>
                    
                    </div>
                    <div class="form-group col-12 my-3 text-center mb-4">
                        <input type="email" class="text-center col-8 col-md-6 col-lg-4" id="email" placeholder="podpowiedzEmail" placeholder="Wpisz Email"></input>
                    </div>
                    <div class="form-group col-12 my-3 text-center mb-4">
                        <input type="password" class="text-center col-8 col-md-6 col-lg-4" id="pass" placeholder="Wpisz hasło"></input>
                    </div>
                    <div class="form-group col-12 my-3 text-center mb-4">
                        <input type="password" class="text-center col-8 col-md-6 col-lg-4 " id="pass2" placeholder="Powtórz hasło"></input>
                    </div>
                    <div class="form-group col-12 my-3 text-center mb-4">
                        <input type="checkbox" class="form-check-input ml-1" id="przykladowyCheckbox"></input>
                        <label class="form-check-label col-8 col-md-6 col-lg-4" for="przykladowyCheckbox">Oświadczam że znam i akceptuję postanowienia Regulaminu.</label>
                    </div>
                    <div class="col-12 text-center" >
                    <button type="submit" class="btn btn-primary col-8 col-md-6 col-lg-4">Zarejestruj się</button>
                    </div>
                </div>
            </div>
        );
    }
}



export default Registration