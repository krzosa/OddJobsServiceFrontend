import React, { Component } from "react";
import "./style.css"
class EditProfile extends Component{
    render(){
        return(
          <div className="test center">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="container bootstrap snippets ">
          <div className="row ">
            <div className="col-xs-12 col-sm-9 ">
              <form className="form-horizontal">
                <div className="panel panel-default">
                  <div className="panel-body text-center">
                    <img class="align-self-center mt-5" src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-circle profile-avatar" alt="User avatar" />
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title text-center">Użytkownik</h4>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Nazwa użytkownika</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title text-center">Informacje kontaktowe</h4>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Numer telefonu</label>
                      <div className="col-sm-10">
                        <input type="tel" className="form-control" />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Adres zamieszkania</label>
                      <div className="col-sm-10">
                        <textarea rows={3} className="form-control" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title text-center">Hasło</h4>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Wprowadź obecne hasło:</label>
                      <div className="col-sm-10">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Wprowadź nowe hasło:</label>
                      <div className="col-sm-10">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-10 col-sm-offset-2">
                        <div className="checkbox">
                          <input type="checkbox" id="checkbox_1" />
                          <label htmlFor="checkbox_1">Potwierdzam aktualizację wprowadzonych danych</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-10 col-sm-offset-2">
                        <button type="submit" className="btn btn-primary">Zatwierdź</button>
                        <button type="reset" className="btn btn-default">Resetuj formularze</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
    }
  }
        



export default EditProfile