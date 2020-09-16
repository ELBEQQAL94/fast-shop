import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Services
import requests from './services/requests';

// Components
import { Navbar } from './components';

// Pages
import { Home, Product } from './pages';

// Data layer
import { useStateValue } from './store/StateProvider';

const Routers = () => {

  const [selecetdOption, setSelecetdOption] = useState(requests.all)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Navbar
              selecetdOption={selecetdOption}
              setSelecetdOption={setSelecetdOption}
            />
            <Home selecetdOption={selecetdOption} />
          </Route>
          <Route path='/checkout'>
            <h1>CheckOut</h1>
          </Route>
          <Route path='/product'>
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routers;
