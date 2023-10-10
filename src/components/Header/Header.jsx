import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import Logo from '../UX/Logo/Logo'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerWrapper}>
					<Logo className={styles.logo} />
					<nav className={styles.headerNav}>
						<ul className={styles.headerList}>
							<li>
								<NavLink className={styles.headerLink}  to='/about'>About</NavLink>
							</li>
							<li>
								<NavLink className={styles.headerLink}  to='/projects'>Projects</NavLink>
							</li>
							<li>
								<NavLink className={styles.headerLink} to='/news'>News</NavLink>
							</li>
							<li>
								<NavLink className={styles.headerLink}  to='/contacts'>Contacts</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header