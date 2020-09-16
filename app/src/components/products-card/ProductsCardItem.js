import React, { forwardRef } from 'react';

// Material UI Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Data Layer
import { useStateValue } from '../../store/StateProvider';

// Action Type
import { ADD_TO_CART } from '../../store/types';

// Components
import { Button, Price } from '../elements';

// Types
import PropTypes from 'prop-types';

// Style
import "./ProductsCardItem.scss";

const ProductsCardItem = forwardRef(({
  id,
  name,
  image,
  price,
  solde,
  oldPrice,
}, ref) => {

  const [{cart}, dispatch] = useStateValue();

  console.log("CART: ", cart);

  // add to cart
  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      item: {
        id,
        name,
        image,
        price,
      },
    });
  };

  return (
    <div className="products__card__item" ref={ref}>
      <img
        src={image}
        alt={name}
        title={name}
        className="products__card__item--img"
      />
      <p className="product__title">{name}</p>
      <div className="price__container">
        <Price price={price} />
        { solde && <p className="solde">{oldPrice}<small>dh</small></p>}
      </div>
      <Button Icon={AddShoppingCartIcon} title="AJOUTER AU PANIER" func={addToCart}/>
    </div>
  );
});

ProductsCardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  solde: PropTypes.bool.isRequired,
  oldPrice: PropTypes.number.isRequired,
};

export default ProductsCardItem;
