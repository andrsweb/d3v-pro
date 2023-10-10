import styles from './Logo.module.css'
import { Link } from "react-router-dom"

const Logo = () => {
	return (
		<Link to='/main' className={styles.headerLogo} data-text="d3v.pro">d3v.pro</Link>
	)
}

export default Logo