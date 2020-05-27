import React, { Component } from "react";
import "./style.scss";
import user from '../../Auth/User';

class Userpanel extends Component {
    render(){        
        return(
        <div className="container" id="userpanel">
            <div className="row">
                <div className="col-sm-4">
                        <br></br><br></br>
                        <img className="w-75 h-40 rounded-circle" id="avatar" src={require('./avatar.jpg') } alt=""/>
                        <br></br><br></br>
                        <form>
                            <input type="file" id="file" name="file"/><br></br><br></br>
                        </form>

        <h4 className="text-left">{user.getFirstName() + " " + user.getLastName()}</h4>

                        <nav className="nav flex-column">
                            <a className="nav-link active" href="#">Ogólne</a>
                            <a className="nav-link" href="#">Moje ogłoszenia</a>
                            <a className="nav-link" href="#">Moja praca</a>
                        </nav>
                </div>  
                <div className="col-sm-8">
                    <br></br><br></br><br></br>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="imie">Imię:</label>
                                <input type="text" className="form-control" id="imie" placeholder={user.getFirstName()} name="imie" readOnly/><br></br>
                                <label htmlFor="nazwisko">Nazwisko:</label>
                                <input type="text" className="form-control" id="nazwisko" placeholder={user.getLastName()} name="nazwisko" readOnly/><br></br>
                                <label htmlFor="imie">Konto:</label>
                                <input type="text" className="form-control" id="konto" placeholder={user.getUserName()} name="konto" readOnly/><br></br>
                                <label htmlFor="nazwisko">Hasło:</label>
                                <input type="password" className="form-control" id="haslo" placeholder={user.getPassword()} name="haslo"/><br></br>
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder={user.getEmail()} name="email"/><br></br>
                                <label htmlFor="tel">Tel:</label>
                                <input type="tel" className="form-control" id="tel" placeholder={user.getPhoneNumber()} name="tel"/><br></br>
                                <button type="button" className="btn btn-primary">Zapisz</button>
                                <button type="button" className="btn btn-light">Anuluj</button>
                                <br></br><br></br><br></br>
                            </div>
                            
                        </div>
                    </form>
                </div>    
            </div>






        </div>

        );
    }
}

export default Userpanel;