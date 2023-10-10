import styles from './NotFound.module.css'

const NotFound = () => {
	return (
		<>
			<div className={styles.notFoundWrapper}>
				<div className={styles.notFoundText}>
					This page does not exist
				</div>
			</div>
		</>
	)
}

export default NotFound