import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../Redux/Actions/filters';
import { fetchPizzas } from '../Redux/Actions/pizzas';
import {addPizzaToCart} from '../Redux/Actions/cart';

import Categories from '../components/Categories';
import SortPopup from '../components/SortPopup';
import PizzaBlock from '../components/Pizzablock.jsx/Index';
import LoadingPizzaBlock from '../components/Pizzablock.jsx/LoadingPizzaBlock';



const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
	{ name: 'популярности', type: 'rating', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавит', type: 'name', order: 'asc' }];


function Home() {

	const items = useSelector(({ pizzas }) => pizzas.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const cartItems = useSelector(({ cart }) => cart.items);
	const { category, sortBy } = useSelector(({ filters }) => filters)

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPizzas(category, sortBy));
	}, [category, sortBy]);

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index));
	}, []);

	const onSelectSortType = React.useCallback((obj) => {
		console.log(obj);
		dispatch(setSortBy(obj));
	}, []);

	const handleAddPizzaToCart = (obj) => {
		dispatch(addPizzaToCart(obj));
	};

	return (
		<div className="container">
			<div className="content__top">
				<Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />
				<SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded
					? items.map((obj) => (<PizzaBlock addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} onClickAddPizza={handleAddPizzaToCart} key={obj.id} obj={obj} />))
					: Array(12).fill(0).map((_, index) => <LoadingPizzaBlock key={index} />)
				}

			</div>
		</div>
	)
}

export default Home
