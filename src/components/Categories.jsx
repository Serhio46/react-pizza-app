import React from 'react';
import PropTypes from 'prop-types';


const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
	return (
		<div className="categories">
			<ul>
				<li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)} >Все</li>
				{items && items.map((item, index) => <li onClick={() => onClickCategory(index)} className={activeCategory === index ? 'active' : ''} key={`${item}__${index}`}>{item}</li>
				)}
			</ul>
		</div>
	)
})

Categories.propTypes = {
	activCategory: PropTypes.oneOf([PropTypes.number, null]),
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func,
}

Categories.defaultProps = {
	activCategory: null,
	items: [],
}

export default Categories;





