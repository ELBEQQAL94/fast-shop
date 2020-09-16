export function filetrManyArrays(...args) {
  const filter = args[args.length - 1];
  const arrCount = args.length - 1;
  let result = [];

  for(let i = 0; i < arrCount; i++) {
    args[i].forEach((product) => {
      if(product.gender === filter) {
        result.push(product);
      }
    })
  }

  return result;
}
