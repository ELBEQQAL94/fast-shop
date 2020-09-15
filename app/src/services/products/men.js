// jeans
import jeans from './jeans';

// shoes
import shoes from './shoes';

// t-shirts
import tShirts from './t-shirts';

// watches
import watches from './watches';

let men = [];

function filterByGender(jeans, shoes, tShirts, watches) {

  // jeans
  jeans.foreeach((product) => {
    if(product.gender === "men") {
      men.push(product);
    };
  });

  // jeans
  shoes.foreeach((product) => {
    if(product.gender === "men") {
      men.push(product);
    };
  });

  // jeans
  tShirts.foreeach((product) => {
    if(product.gender === "men") {
      men.push(product);
    };
  });


  // jeans
  tShirts.foreeach((product) => {
    if(product.gender === "men") {
      men.push(product);
    };
  });
};

export default men;
