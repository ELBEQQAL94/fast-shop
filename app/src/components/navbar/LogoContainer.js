import React from 'react';
import { Link } from 'react-router-dom';

// Fast Shop Logo
import FastshopLogo from '../../images/fastshop_logo.jpg';

// Style
import "./LogoContainer.scss";

const LogoContainer = () => {
  return (
    <div className="logo__container">
      <Link to="/">
        <img
          src={FastshopLogo}
          alt="fastshop-logo"
          title="amazon-logo"
        />
      </Link>
    </div>
  );
};

export default LogoContainer;
