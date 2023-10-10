import styles from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({ text }) => {
	return (
		<Link to='/main' className={styles.button} data-text={text}>
			{text}
		</Link>
	)
}

export default Button