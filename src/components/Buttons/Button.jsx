import styles from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({ text, onClick }) => {
	return (
		<Link to='/main' className={styles.button} data-text={text} onClick={onClick}>
			{text}
		</Link>
	)
}

export default Button