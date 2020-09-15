export function filterByGender(jeans, shoes, tShirts, watches, filter) {
  
  let result = [];

  // jeans 
  jeans.foreeach((product) => {
    if(product.gender === filter) {
      men.push(product);
    };
  });

  // shoes 
  shoes.foreeach((product) => {
    if(product.gender === filter) {
      men.push(product);
    };
  });

  // t-shirts 
  tShirts.foreeach((product) => {
    if(product.gender === filter) {
      men.push(product);
    };
  });


  // watches 
  watches.foreeach((product) => {
    if(product.gender === filter) {
      men.push(product);
    };
  });

  return result;
};
