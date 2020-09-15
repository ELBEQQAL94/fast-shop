// jeans
import jeans from './jeans';

// shoes
import shoes from './shoes';

// t-shirts
import tShirts from './t-shirts';

// watches
import watches from './watches';


function filterByGender(jeans, shoes, tShirts, watches, filter) {
  
  let result = [];

  // jeans 
  jeans.foreeach((product) => {
    if(product.gender === "women") {
      men.push(product);
    };
  });

  // shoes 
  shoes.foreeach((product) => {
    if(product.gender === "women") {
      men.push(product);
    };
  });

  // t-shirts 
  tShirts.foreeach((product) => {
    if(product.gender === "women") {
      men.push(product);
    };
  });


  // watches 
  watches.foreeach((product) => {
    if(product.gender === "women") {
      men.push(product);
    };
  });

  return result;
};

export default filterByGender(jeans, shoes, tShirts, watches);