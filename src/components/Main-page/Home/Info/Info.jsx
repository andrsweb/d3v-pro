import styles from './Info.module.css'

const Info = () => {
	return (
		<section className={styles.info}>
			<div className="container">
				<div className={styles.infoWrapper}>
					<h2 className={styles.infoTitle}>
						About my skills
					</h2>
					<div className={styles.infoInner}>
						<p className={styles.infoText}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nobis ipsum, labore saepe ipsam eaque a fuga atque nulla doloremque voluptates distinctio accusamus optio incidunt perspiciatis. Suscipit quos debitis sit.
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nobis ipsum, labore saepe ipsam eaque a fuga atque nulla doloremque voluptates distinctio accusamus optio incidunt perspiciatis. Suscipit quos debitis sit.
						</p>
						<p className={styles.infoText}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nobis ipsum, labore saepe ipsam eaque a fuga atque nulla doloremque voluptates distinctio accusamus optio incidunt perspiciatis. Suscipit quos debitis sit.
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nobis ipsum, labore saepe ipsam eaque a fuga atque nulla doloremque voluptates distinctio accusamus optio incidunt perspiciatis. Suscipit quos debitis sit.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Info