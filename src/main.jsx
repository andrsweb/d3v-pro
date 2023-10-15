import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import Home from './components/Main-page/Home/Home.jsx';
import App from './components/App.jsx'
import About from './components/About/About.jsx';
import Blog from './components/Blog/Blog'
import Projects from './components/Projects/Projects'
import News from './components/News/News.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import './assets/css/index.css'
import './assets/css/typography.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />, 
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/projects",
				element: <Projects />
			},
			{
				path: "/news",
				element: <News />
			},
			{
				path: "/contacts",
				element: <Contacts />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
