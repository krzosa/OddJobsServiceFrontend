import React, { Component } from "react";

class AddOffers extends Component{
    render(){
        return(
            <div className="container mt-5 mb-3" id="add-offers">
              <form>

                  <div className="form-group col-12 col-md-10 col-lg-6">
                    <label forHtml="jobName" class="mt-2">Nazwa pracy:</label>
                    <input type="text" className="form-control" id="jobName"></input>
                  </div>
      
                  <div className="form-group col-12 col-md-10 col-lg-6">
                    <label forHtml="companyName">Nazwa firmy:</label>
                    <input type="text" className="form-control" id="companyName"></input>
                  </div>
                
                <div className="form-group col-12 col-md-10 col-lg-6">
                  <label forHtml="city">Miasto:</label>
                  <input type="text" className="form-control" id="city"></input>
                </div>

              <div className="row pl-3 py-2">
                <div className="form-group col-6 col-md-5 col-lg-3 ">
                  <label forHtml="type" className="mr-1">Rodzaj umowy:</label>
                  <select id="typeofcontract">
                    <option value="brak">---</option>
                    <option value="Zlecenie">Zlecenie</option>
                    <option value="oPrace">O prace</option>
                    <option value="Dzielo">Dzieło</option>
                  </select>
                </div>

                <div className="form-group col-6 col-md-5 col-lg-3">
                  <label forHtml="time" className="mr-1">Wymiar umowy:</label>
                  <select id="sizeofcontract">
                    <option value="brak">---</option>
                    <option value="1/2">1/2 etatu</option>
                    <option value="3/5">3/5 etatu</option>
                    <option value="4/5">4/5 etatu</option>
                    <option value="1">1</option>
                  </select>
                </div>

              </div>

                <div className="form-group mx-3">
                  <label forHtml="description">Opis:</label>
                  <textarea className="form-control" id="description" rows="4"></textarea>
                </div>

                <div className="form-group ml-3">
                  <label forHtml="jpg" className="mr-3">Wybierz zdjęcie: </label>
                  <input type="file" id="jpg"></input>
                </div>
                <div className="col-12 text-center" >
                  <button type="submit" className="btn btn-primary col-8 col-md-6 col-lg-4 mb-5" >Dodaj oferte</button>
                </div>
              </form>
            </div>
        );
    }
}



export default AddOffers