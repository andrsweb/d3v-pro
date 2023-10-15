import styles from './Skills.module.css'

const Card = ({num,text}) => {
	return (
		<div className={styles.card}>
			<div className={styles.box}>
				<div className={styles.percent}>
					<svg>
						<circle className={styles.firstCircle} cx="70" cy="70" r="70"></circle>
						<circle className={styles.secondCircle} cx="70" cy="70" r="70"></circle>
					</svg>
					<div className={styles.num}>
						<span className={styles.spanNum}>{num}<span className={styles.spanPercent}>%</span></span>
					</div>
				</div>
				<h3 className={styles.text}>{text}</h3>
			</div>
		</div>
	)
}

export default Card