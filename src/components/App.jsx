import { useState, useEffect } from 'react';
import Enter from './Enter/Enter'
import NotFound from './NotFound/NotFound'
import Loader from './Loader/Loader';
import AnimatedCursor from "react-animated-cursor"
import {
	createBrowserRouter,
	RouterProvider,
	Link
} from "react-router-dom";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<Enter />
			),
		},
		{
			path: "/main",
			element: (
				<>
					<h1>Hello from main</h1>
					<Link to="/">Home</Link>
				</>
			),
		},
		{
			path: "/*",
			element: (
				<>
					<NotFound />
				</>
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
