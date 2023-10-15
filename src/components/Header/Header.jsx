import { NavLink } from 'react-router-dom'
import Logo from '../UX/Logo/Logo'

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='headerWrapper'>
					<Logo />
					<nav className='headerNav'>
						<ul className='headerList'>
							<li>
								<NavLink className='headerLink'  to='/about'>About</NavLink>
							</li>
							<li>
								<NavLink className='headerLink'  to='/blog'>Blog</NavLink>
							</li>
							<li>
								<NavLink className='headerLink'  to='/projects'>Projects</NavLink>
							</li>
							<li>
								<NavLink className='headerLink' to='/news'>News</NavLink>
							</li>
							<li>
								<NavLink className='headerLink'  to='/contacts'>Contacts</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header