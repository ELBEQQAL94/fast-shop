import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Components
import { Navbar } from './components';

// Pages
import { Home } from './pages';

// Data layer
import { useStateValue } from './store/StateProvider';

const Routers = () => {

  const [selecetdOption, setSelecetdOption] = useState(request.all)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Home />
          </Route>
          <Route path='/checkout'>
            <h1>CheckOut</h1>
          </Route>
          <Route path='/product'>
            <h1>Product</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routers;
