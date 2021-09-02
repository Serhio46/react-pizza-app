import { combineReducers } from 'redux';

import pizzas from './pizzas';
import filters from './filters';
import cart from './cart';

const rootReduser = combineReducers({
	pizzas,
	filters,
	cart,
});

export default rootReduser;