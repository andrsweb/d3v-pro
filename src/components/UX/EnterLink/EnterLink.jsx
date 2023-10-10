import styles from './EnterLink.module.css'
import { Link } from 'react-router-dom'

const EnterLink = ({ text }) => {
	return (
		<Link to='/main' className={styles.button} data-text={text}>
			{text}
		</Link>
	)
}

export default EnterLink