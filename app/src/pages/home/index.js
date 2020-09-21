import React from 'react';

// Types
import PropTypes from 'prop-types';

// Components
import { ProductsCard } from '../../components';

// Style
import "./index.scss";

const Home = ({selecetdOption}) => {
  // console.log("selcted option: ", selecetdOption);
  return(
    <div className="home">
      <h1 className="home__title">nos offres</h1>
      <ProductsCard products={selecetdOption}/>
    </div>
  );
};

Home.propTypes = {
  selecetdOption: PropTypes.string.isRequired,
};

export default Home;
