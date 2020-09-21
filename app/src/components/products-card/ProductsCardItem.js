import React, { forwardRef } from 'react';

// react router dom
import { Link } from 'react-router-dom';

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
  slug,
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
        solde,
        oldPrice,
        slug,
      },
    });
  };

  return (
    <div className="products__card__item" ref={ref}>
      <Link to={`/product/${slug}`}>
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
      </Link>
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
  slug: PropTypes.string.isRequired,
};

export default ProductsCardItem;
