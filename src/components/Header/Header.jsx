import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}></div>
		</header>
	)
}

export default Header