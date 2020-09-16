import React from 'react';

// Types
import PropTypes from 'prop-types';

// Components
// import { Banner, Products, ProductsCard } from '../../components';

// Style
import "./index.scss";

const Home = ({selecetdOption}) => {
  console.log("selceted option: ", selecetdOption);
  return(
    <div>
      Home!
    </div>
  );
};

Home.propTypes = {
  selecetdOption: PropTypes.string.isRequired,
};

export default Home;
