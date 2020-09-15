import React from 'react';

// requests
import {request} from '../../services';

// Types
import PropTypes from 'prop-types';

const NavItem = ({ selecetdOption, setSelecetdOption }) => (
  <ul>
    <li
      onClick={() => setSelecetdOption(request.all)}
      className={`${selecetdOption === request.all ? 'nav--active' : ''}`}
    >
      all
    </li>
    <li
      onClick={() => setSelecetdOption(request.watches)}
      className={`${selecetdOption === request.watches ? 'nav--active' : ''}`}
    >
      watches
    </li>
    <li
      onClick={() => setSelecetdOption(request.tShirts)}
      className={`${selecetdOption === request.tShirts ? 'nav--active' : ''}`}
    >
      t-shirts
    </li>
    <li
      onClick={() => setSelecetdOption(request.shoes)}
      className={`${selecetdOption === request.shoes ? 'nav--active' : ''}`}
    >
      shoes
    </li>
    <li
      onClick={() => setSelecetdOption(request.jeans)}
      className={`${selecetdOption === request.jeans ? 'nav--active' : ''}`}
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
