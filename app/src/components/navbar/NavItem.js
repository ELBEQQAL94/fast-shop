import React from 'react';

// react router
import { Link } from 'react-router-dom';

// requests
import requests from '../../services/requests';

// Types
import PropTypes from 'prop-types';

const NavItem = ({ selecetdOption, setSelecetdOption }) => (
  <ul>
    <li
      onClick={() => setSelecetdOption(requests.all)}
    >
      <Link 
        to="/" 
        className={`link__item ${selecetdOption === requests.all ? 'nav--active' : ''}`}
      >
        all
      </Link>
    </li>
    <li
      onClick={() => setSelecetdOption(requests.women)}
    >
      <Link 
        to="/" 
        className={`link__item ${selecetdOption === requests.women ? 'nav--active' : ''}`}
      >
        women
      </Link>
    </li>
    <li
      onClick={() => setSelecetdOption(requests.men)}
    >
      <Link 
        to="/" 
        className={`link__item ${selecetdOption === requests.men ? 'nav--active' : ''}`}
      >
        men
      </Link>
    </li>
    <li
      onClick={() => setSelecetdOption(requests.watches)}
    >
      <Link 
        to="/" 
        className={`link__item ${selecetdOption === requests.watches ? 'nav--active' : ''}`}
      >
        watches
      </Link>
    </li>
    <li
      onClick={() => setSelecetdOption(requests.tShirts)}
    >
      <Link 
        to="/" 
        className={`link__item ${selecetdOption === requests.tShirts ? 'nav--active' : ''}`}
      >
        t-shirts
      </Link> 
    </li>
    <li
      onClick={() => setSelecetdOption(requests.shoes)}
    >
      <Link 
        to="/" 
        className={`link__item ${selecetdOption === requests.shoes ? 'nav--active' : ''}`}
      >
        shoes
      </Link>
    </li>
    <li
      onClick={() => setSelecetdOption(requests.jeans)}
    >
      <Link 
        to="/" 
        className={`link__item ${selecetdOption === requests.jeans ? 'nav--active' : ''}`}
      >
        jeans
      </Link>
    </li>
  </ul>
);

NavItem.propTypes = {
  setSelecetdOption: PropTypes.string.isRequired,
  selecetdOption: PropTypes.string.isRequired,
};

export default NavItem;
