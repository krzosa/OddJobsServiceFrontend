import Navbar from './components/navbar/Navbar'
import Body from './views/test-page/Body'
import Registration from './views/Registration';
import React from 'react';
import './App.scss';

//React Router import
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Offers from './views/Offers/Offers';

function App() {
  return (
    <div className="bg-light App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/praca" component={Offers} />
      </Switch>
    </div>
  );
}





export default App;
