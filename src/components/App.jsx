import { useState, useEffect } from 'react';
import Enter from './Enter/Enter'
import Loader from './Loader/Loader';
import AnimatedCursor from "react-animated-cursor"

function App() {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, [])

	return (
		<div>
			<AnimatedCursor
				innerSize={10}
				outerSize={35}
				innerScale={3}
				outerScale={1}
				outerAlpha={0}
				hasBlendMode={true}
				innerStyle={{
					backgroundColor: '#ffea19'
				}}
				outerStyle={{
					border: '3px solid #ffea19'
				}}
			/>

			{loading ? (
				<Loader />
			) : (
				<>
					<Enter />
				</>
			)}
		</div>
	)
}

export default App
