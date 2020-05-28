import React, { Component } from "react";
import axios from 'axios';
 
import user from '../../Auth/User'
 
class AddOffers extends Component{
  state = {
    title: "",
    description: "",
    city: "",
    advertisementCategory: "",
    workingHours: "",
    contractType: "",
    reward: "",
    checked: false
  };
 
  constructor(props) {    
    super(props);    
    this.handleAddOffer = this.handleAddOffer.bind(this);  
    this.handleChangeContractType = this.handleChangeContractType.bind(this); 
    this.handleChangeContractSize = this.handleChangeContractSize.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeReward = this.handleChangeReward.bind(this);        
        
 
  }
 
  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
 
  handleChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };
 
  handleChangeContractType(e) {
    this.setState({contractType: e.target.value});
  }

  handleChangeCity = (e) => {
    this.setState({ city: e.target.value });
  };
 
  handleChangeContractSize(e) {
    this.setState({workingHours: e.target.value});
  }
 
  handleChangeCategory(e) {
    this.setState({advertisementCategory: e.target.value});
  }

  handleChangeReward(e) {
    this.setState({reward: e.target.value});
  }
 

 
  handleAddOffer(e){
      e.preventDefault();
 
      const headers = {
          "Content-Type": "application/json",
      }
 
      // var data = {
      //   title: this.state.title,
      //   description: this.state.description,
      //   city: this.state.city,
      // };
 
      var data = {        
        title: this.state.title,
        description: this.state.description,
        city: this.state.city,
        advertisementCategory: this.state.advertisementCategory,
        workingHours: this.state.workingHours,
        contractType: this.state.contractType,
        reward: parseInt(this.state.reward, 10)
        };
 
      console.log(data);

      axios.post("http://149.156.146.249:60021/api/advertisements", data,{
        headers: headers,
        withCredentials: true
      },
      )
      .then(res => console.log(res))
      .catch(err => console.log(err))
 
    }
 
    render(){
        return(    
            <div className="container content mt-5 mb-5">
              <form onSubmit={this.handleAddOffer}>
                  <div className="form-group col-12 col-md-10 col-lg-6">
                    <label forHtml="jobName" class="mt-2">Nazwa pracy:</label>
                    <input type="text" className="form-control" id="jobName" onChange={this.handleChangeTitle}></input>
                   
                  </div>
     
                  {/* <div className="form-group col-12 col-md-10 col-lg-6">
                    <label forHtml="companyName">Nazwa firmy:</label>
                    <input type="text" className="form-control" id="companyName" ></input>
                  </div> */}
               
                {/* <div className="form-group col-12 col-md-10 col-lg-6">
                  <label forHtml="city">Miasto:</label>
                  <input type="text" className="form-control" id="city" onChange={this.handleChangeCity}></input>
                </div> */}
 
                <div className="form-group col-12 col-md-10 col-lg-6">
                  <label forHtml="city">Pensja:</label>
                  <input type="text" className="form-control" id="reward" onChange={this.handleChangeReward}></input>
                </div>
 
              <div className="row pl-3 py-2">
                <div className="form-group col-6 col-md-5 col-lg-3 ">
                  <label forHtml="type" className="mr-1">Rodzaj umowy:</label>
                  <select id="typeofcontract" onChange={this.handleChangeContractType}>
                    <option value="brak">---</option>
                    <option value="MANDATORY_CONTRACT">Zlecenie</option>
                    <option value="EMPLOYMENT_CONTRACT">O prace</option>
                  </select>
                </div>
 
                <div className="form-group col-6 col-md-5 col-lg-3">
                  <label forHtml="time" className="mr-1">Wymiar umowy:</label>
                  <select id="sizeofcontract" onChange={this.handleChangeContractSize}>
                    <option value="brak">---</option>
                    <option value="HALF_TIME">1/2 etatu</option>
                    <option value="TWO_THIRDS_FULL_TIME">2/3 etatu</option>
                    <option value="FULL_TIME">1</option>
                  </select>
                </div>
 
                <div className="form-group col-6 col-md-5 col-lg-3">
                  <label forHtml="time" className="mr-1">Kategoria</label>
                  <select id="advertisementCategory" onChange={this.handleChangeCategory}>
                    <option value="brak">---</option>
                    <option value="HOUSEWORK">HOUSEWORK</option>
                    <option value="ANIMALSCARE">ANIMALSCARE</option>
                    <option value="GARDENCARE">GARDENCARE</option>
                  </select>
                </div>
 
                <div className="form-group col-6 col-md-5 col-lg-3">
                  <label forHtml="time" className="mr-1">Miasto</label>
                  <select id="city" onChange={this.handleChangeCity}>
                    <option value="brak">---</option>
                    <option value="KRAKOW">KRAKOW</option>
                    <option value="WARSZAWA">WARSZAWA</option>
                    <option value="WROCLAW">WROCLAW</option>
                  </select>
                </div>
 
              </div>
 
             
 
                <div className="form-group mx-3">
                  <label forHtml="description">Opis:</label>
                  <textarea className="form-control" id="description" rows="4" onChange={this.handleChangeDescription}></textarea>
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