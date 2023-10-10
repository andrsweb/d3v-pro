import styles from './Button.module.css'

const Button = ({ text, onClick }) => {
	return (
		<button className={styles.button} data-text={text} onClick={onClick}>
			{text}
		</button>
	)
}

export default Button