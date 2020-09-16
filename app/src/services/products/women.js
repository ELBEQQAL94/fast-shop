// jeans
import jeans from './jeans';

// shoes
import shoes from './shoes';

// t-shirts
import tShirts from './t-shirts';

// watches
import watches from './watches';

// utlis functions
import { filetrManyArrays } from '../../utils';

const women = filetrManyArrays(jeans, shoes, tShirts, watches, "women");

export default women;
