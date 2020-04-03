import React from 'react';
import './App.scss';

//React Router import
import { Switch, Route } from 'react-router-dom';
// Import Components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
// Import Pages
import Registration from './views/Registration';
import Offers from './views/Offers/Offers';
import Body from './views/test-page/Body'
import About from './views/about/About';

function App() {
  return (
    <div className="bg-light App">
      <Navbar />
  
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/praca" component={Offers} />
        <Route path="/rejestracja" component={Registration} />
        <Route path="/about" component={About} />
      </Switch>

      <Footer />
    </div>
  );
}





export default App;
