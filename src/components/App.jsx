import { useState, useEffect } from 'react';
import Canvas from './Canvas/Canvas';
import { Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { initCanvas } from '../assets/js/canvas';


function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			initCanvas()
		}, 10);
	}, []);

	return (
		<>
			<Canvas />
			{loading ? (
				<Loader />
			) : (
				<>
					<div className='app'>
						<div className="wrapper">
							<Header />
							<Outlet />
							<Footer />
						</div>
					</div>
				</>
			)}
		</>
	)
}
export default App
