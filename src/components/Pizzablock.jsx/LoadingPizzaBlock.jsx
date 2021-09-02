import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingPizzaBlock() {
	return (
		<ContentLoader
			className='pizza-block'
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="472" cy="630" r="86" />
			<circle cx="140" cy="120" r="120" />
			<rect x="0" y="250" rx="5" ry="5" width="300" height="26" />
			<rect x="0" y="290" rx="7" ry="7" width="280" height="84" />
			<rect x="1" y="395" rx="7" ry="7" width="90" height="30" />
			<rect x="130" y="390" rx="25" ry="25" width="150" height="40" />
		</ContentLoader>
	)
}

export default LoadingPizzaBlock;
