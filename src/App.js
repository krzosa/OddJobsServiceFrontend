import React from 'react';
import './App.scss';

//React Router import
import { Switch, Route } from 'react-router-dom';
// Import Components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
// Import Pages
import Registration from './views/registration/Registration';
import Offers from './views/Offers/Offers';
import Body from './views/test-page/Body'
import About from './views/about/About';
import Details from './views/Details/Details';
import HomePage from './views/HomePage/home';
import EditProfile from './views/EditProfile/editProfile';
import Login from './views/login/Login';
import History from './views/history/History';
import Userpanel from './views/userpanel/Userpanel';
import AddOffers from './views/AddOffers/AddOffers';


function App() {
  return (
    <div className="bg-light App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/praca" component={Offers} />
        <Route path="/rejestracja" component={Registration} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/history" component={History} />
        <Route path="/details" component={Details} />
	      <Route path="/homePage" component={HomePage} />
        <Route path="/editProfile" component={EditProfile} />
        <Route path="/userpanel" component={Userpanel} />
        <Route path="/addoffers" component={AddOffers} />
      </Switch>
      <Footer />
    </div>
  );
}





export default App;