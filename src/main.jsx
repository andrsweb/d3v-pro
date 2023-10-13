import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import App from './components/App.jsx'
import About from './components/About/About.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import './assets/css/index.css'
import './assets/css/typography.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<App />
		), children: [
			{
				path: "/about",
				element: (
					<>
						<About />
					</>
				),
			},
		]
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

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
