const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const cart = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PIZZA_CART': {

			const currentPizzaItems = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload];

			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzaItems,
					totalPrice: getTotalPrice(currentPizzaItems),
				},
			};

			const allPizzas = Object.values(newItems).map(obj => obj.items).flat()

			return {
				...state,
				items: newItems,
				totalCount: allPizzas.length,
				totalPrice: getTotalPrice(allPizzas),
				//totalCount: ++state.totalCount,
				//totalPrice: state.totalPrice + action.payload.price,
			};
		}

		case 'REMOVE_GROUP': {
			const newItems = {
				...state.items,
			};

			delete newItems[action.payload];

			return {
				...state,
				items: newItems,
			};
		}


		case 'CLEAR_CART': {
			state = initialState;
		}

		default:
			return state;
	}

}


export default cart;