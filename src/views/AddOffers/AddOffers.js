import React, { Component } from "react";

class AddOffers extends Component{
    render(){
        return(
            <div className="container" style={{ heigth: "100%" }}>
              <form>

                  <div class="form-group col-12 col-md-10 col-lg-8">
                    <label for="jobName" class="mt-2">Nazwa pracy:</label>
                    <input type="text" class="form-control" id="jobName"></input>
                  </div>
      
                  <div class="form-group col-12 col-md-10 col-lg-8">
                    <label for="companyName">Nazwa firmy:</label>
                    <input type="text" class="form-control" id="companyName"></input>
                  </div>
                
                <div class="form-group col-12 col-md-10 col-lg-8">
                  <label for="city">Miasto:</label>
                  <input type="text" class="form-control" id="city"></input>
                </div>

              <div class="row col-12">
                <div class="form-group col-6 mt-2">
                  <label for="type" class="mr-3">Rodzaj umowy:</label>
                  <select id="typeofcontract">
                    <option value="brak">---</option>
                    <option value="Zlecenie">Zlecenie</option>
                    <option value="oPrace">O prace</option>
                    <option value="Dzielo">Dzieło</option>
                  </select>
                </div>

                <div class="form-group col-6 mt-2">
                  <label for="time" class="mr-3">Wymiar umowy:</label>
                  <select id="sizeofcontract">
                    <option value="brak">---</option>
                    <option value="1/2">1/2 etatu</option>
                    <option value="3/5">3/5 etatu</option>
                    <option value="4/5">4/5 etatu</option>
                    <option value="1">1</option>
                  </select>
                </div>

              </div>

                <div class="form-group ml-3">
                  <label for="description">Opis:</label>
                  <textarea class="form-control" id="description" rows="4"></textarea>
                </div>

                <div class="form-group ml-3">
                  <label for="jpg" class="mr-3">Wybierz zdjęcie: </label>
                  <input type="file" id="jpg"></input>
                </div>
                <div class="col-12 text-center" >
                  <button type="submit" class="btn btn-primary col-8 col-md-6 col-lg-4 mb-5" style={{ heigth: "1000px" }}>Dodaj oferte</button>
                </div>
              </form>
            </div>
        );
    }
}



export default AddOffers