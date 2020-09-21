import React, { useState} from 'react';

// react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Services
import requests from './services/requests';

// Components
import { Navbar, BasketIcon } from './components';

// Pages
import { Home, Product } from './pages';

// Data layer
import { useStateValue } from './store/StateProvider';

const Routers = () => {

  const [selecetdOption, setSelecetdOption] = useState(requests.all)
  const [{cart}] = useStateValue();

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Navbar
              selecetdOption={selecetdOption}
              setSelecetdOption={setSelecetdOption}
            />
            <BasketIcon cart={cart} />
            <Home selecetdOption={selecetdOption} />
          </Route>
          <Route path='/checkout'>
            <h1>CheckOut</h1>
          </Route>
          <Route path='/product/:productSlug'>
            <Navbar
              selecetdOption={selecetdOption}
              setSelecetdOption={setSelecetdOption}
            />
            <BasketIcon cart={cart} />
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routers;
