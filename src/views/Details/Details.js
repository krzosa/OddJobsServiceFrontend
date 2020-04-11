import React, { Component } from "react";
import IMG from "./../Offers/images/allegro.jpg";

class Details extends Component {
  render() {
    return (
      <div className="container content">
        <div className="card mb-6 mt-3">
          <div className="row no-gutters border-bottom">
            <div className="col-md-2">
              <img src={IMG} class="card-img" alt="..." />
            </div>
            <div className="col-md-7 form-group text-center mt-4">
              <h5 className="card-title">
                Kierownik Schroniska dla osób bezdomnych z usługami opiekuńczymi
              </h5>
            </div>
            <div className="border-left">
              <div className="col-md form-group text-center mt-4 ">
              <i class="fas fa-money-bill-wave">
                 80-90zł brutto/godz.</i>
              </div>
            </div>
          </div>

          <div className="row no-gutters text-center mt-3">
            <div className="col-md-3 ml-5">
              <i className="fas fa-map-marker-alt">Miejsce</i>
            </div>

            <div className="col-md-3 ml-5">
              <i class="fas fa-newspaper">Umowa o pracę</i>
            </div>

            <div className="col-md-3 ml-5">
              <i class="fas fa-chart-line">Praca fizyczna</i>
            </div>
          </div>

          <div className="row no-gutters text-center mt-3">
            <div className="col-md-3 ml-5">
            <i class="fas fa-clock">Pełny etat</i>
            </div>

            <div className="col-md-3 ml-5">
            <i class="fas fa-calendar-alt">Ważna jeszcze 20dni</i>
            </div>

          </div>
        <div className='container mt-5 border-top'> 
            <p className='text-left pt-3'>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
            </p>
        </div>
        <button className="btn btn-primary">formularz czy cos</button>
        </div>
      </div>
    );
  }
}

export default Details;
