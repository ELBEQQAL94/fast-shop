import React from 'react';

// requests
import requests from '../../services/requests';

// Types
import PropTypes from 'prop-types';

const NavItem = ({ selecetdOption, setSelecetdOption }) => (
  <ul>
    <li
      onClick={() => setSelecetdOption(requests.all)}
      className={`${selecetdOption === requests.all ? 'nav--active' : ''}`}
    >
      all
    </li>
    <li
      onClick={() => setSelecetdOption(requests.women)}
      className={`${selecetdOption === requests.women ? 'nav--active' : ''}`}
    >
      women
    </li>
    <li
      onClick={() => setSelecetdOption(requests.men)}
      className={`${selecetdOption === requests.men ? 'nav--active' : ''}`}
    >
      men
    </li>
    <li
      onClick={() => setSelecetdOption(requests.watches)}
      className={`${selecetdOption === requests.watches ? 'nav--active' : ''}`}
    >
      watches
    </li>
    <li
      onClick={() => setSelecetdOption(requests.tShirts)}
      className={`${selecetdOption === requests.tShirts ? 'nav--active' : ''}`}
    >
      t-shirts
    </li>
    <li
      onClick={() => setSelecetdOption(requests.shoes)}
      className={`${selecetdOption === requests.shoes ? 'nav--active' : ''}`}
    >
      shoes
    </li>
    <li
      onClick={() => setSelecetdOption(requests.jeans)}
      className={`${selecetdOption === requests.jeans ? 'nav--active' : ''}`}
    >
      jeans
    </li>
  </ul>
);

NavItem.propTypes = {
  setSelecetdOption: PropTypes.string.isRequired,
  selecetdOption: PropTypes.string.isRequired,
};

export default NavItem;
