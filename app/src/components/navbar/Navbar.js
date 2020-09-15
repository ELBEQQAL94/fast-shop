import React from 'react';

// Types
import PropTypes from 'prop-types';

// Components
import LogoContainer from './LogoContainer';
import BasketIcon from './BasketIcon';
import NavItem from './NavItem';

// State Provider
import {useStateValue} from '../../store/StateProvider';

// Style
import "./Navbar.scss";

const Navbar = ({selecetdOption, setSelecetdOption}) => {

  const [{cart}] = useStateValue();

  return (
    <header className="header">
      <div className="header__container">
        <LogoContainer />
        <BasketIcon cart={cart}/>
      </div>
      <nav className="nav">
        <NavItem
        selecetdOption={selecetdOption}
        setSelecetdOption={setSelecetdOption}
        />
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  setSelecetdOption: PropTypes.string.isRequired,
  selecetdOption: PropTypes.string.isRequired,
};

export default Navbar;
