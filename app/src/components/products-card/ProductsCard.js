import React from 'react';

// React Flip Move
import FlipMove from 'react-flip-move';

// Types
import PropTypes from 'prop-types';

// Components
import ProductsCardItem from './ProductsCardItem';

// Style
import "./ProductsCard.scss";

const ProductsCard = ({ products }) => {
  return (
    <div className="products__card">
        <div className="products__card__container">
          {
            products?.map(({id, name, price, images, solde, old_price}) => (
              <FlipMove>
                <ProductsCardItem
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  image={images[0].image}
                  solde={solde}
                  oldPrice={old_price}
                />
              </FlipMove>
            ))
          }
        </div>
      </div>
  );
};

ProductsCardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductsCard;
