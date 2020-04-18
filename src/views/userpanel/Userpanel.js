import React, { Component } from "react";


class Userpanel extends Component {
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                        <br></br><br></br><br></br>
                        <img className="w-75 h-40 rounded-circle" src={require('./avatar.jpg')} />
                        <br></br><br></br>
                        <form>
                            <input type="file" id="file" name="file"/><br></br><br></br>
                        </form>

                        <h4 class="text-left">John Doe</h4>

                        <nav class="nav flex-column">
                            <a class="nav-link active" href="#">Ogólne</a>
                            <a class="nav-link" href="#">Moje ogłoszenia</a>
                            <a class="nav-link" href="#">Moja praca</a>
                        </nav>
                </div>  
                <div className="col-sm-8">
                    <br></br><br></br><br></br>
                    <form>
                        <div class="row">
                            <div class="col">
                                <label for="imie">Imię:</label>
                                <input type="text" class="form-control" id="imie" placeholder="Imię" name="imie" readonly/><br></br>
                                <label for="nazwisko">Nazwisko:</label>
                                <input type="text" class="form-control" id="nazwisko" placeholder="Nazwisko" name="nazwisko" readonly/><br></br>
                                <label for="nazwisko">Hasło:</label>
                                <input type="password" class="form-control" id="haslo" placeholder="********" name="haslo"/><br></br>
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Email" name="email"/><br></br>
                                <label for="tel">Tel:</label>
                                <input type="tel" class="form-control" id="tel" placeholder="Tel" name="tel"/><br></br>
                                <button type="button" class="btn btn-primary">Zapisz</button>
                                <button type="button" class="btn btn-light">Anuluj</button>
                                <br></br><br></br><br></br>
                            </div>
                            <div class="col">
                                <label for="ulica">Ulica:</label>
                                <input type="text" class="form-control" id="ulica" placeholder="Ulica" name="ulica"/><br></br>
                                <label for="miasto">Miasto:</label>
                                <input type="text" class="form-control" id="miasto" placeholder="Miasto" name="miasto"/><br></br>
                                <label for="kod">Kod pocztowy:</label>
                                <input type="text" class="form-control" id="kod" placeholder="30-012" name="kod" size="8"/><br></br>
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