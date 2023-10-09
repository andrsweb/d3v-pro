import { useState, useEffect } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	Link
} from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import Enter from './Enter/Enter'
import Loader from './Loader/Loader';

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<Enter />
			),
		},
		{
			path: "/about",
			element: (
				<div>
					<h1>Hello from About</h1>
					<Link to="/">Home</Link>
				</div>
			),
		},
		{
			path: "/*",
			element: (
				<div>
					<h1>Иди нахуй</h1>
					<Link to="/">Home</Link>
				</div>
			),
		},
	]);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);


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
					<RouterProvider router={router} />
				</>
			)}
		</div>
	)
}

export default App
