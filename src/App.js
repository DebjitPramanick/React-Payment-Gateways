import React from 'react'
import BuyScreen from './components/BuyScreen'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from './components/Payment';


const App = () => {

    

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={BuyScreen} />
            <Route exact path="/payment/:method" component={Payment} />
          </Switch>
        </Router>
      </div>
    );
}

export default App
