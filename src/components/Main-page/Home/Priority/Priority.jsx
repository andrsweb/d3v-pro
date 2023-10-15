import styles from './Priority.module.css'

const Priority = () => {
	return (
		<section className={styles.priority}>
			<div className="container">
				<div className={styles.priorityWrapper}>
					<h2 className={styles.priorityTitle}>
						Soft skills
					</h2>
					<div className={styles.priorityInner}>
						<div className={styles.priorityBlocks}>
							<div className={styles.priorityBlock}>
								<div className={styles.priorityBlockInner}>
									Self-learning
								</div>
							</div>
							<div className={styles.priorityBlock}>
								<div className={styles.priorityBlockInner}>
									Time management
								</div>
							</div>
							<div className={styles.priorityBlock}>
								<div className={styles.priorityBlockInner}>
									Flexibility
								</div>
							</div>
							<div className={styles.priorityBlock}>
								<div className={styles.priorityBlockInner}>
									Teamwork
								</div>
							</div>
							<div className={styles.priorityBlock}>
								<div className={styles.priorityBlockInner}>
									Problem solving
								</div>
							</div>
							<div className={styles.priorityBlock}>
								<div className={styles.priorityBlockInner}>
									Communication
								</div>
							</div>
						</div>
						<ul className={styles.priorityList}>
							<li className={styles.priorityItem}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti incidunt, dolorem sunt rem odio tempore totam quae. Sequi vero vel laudantium! Dolore, iste explicabo! Blanditiis officiis facere natus vitae.
							</li>
							<li className={styles.priorityItem}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti incidunt, dolorem sunt rem odio tempore totam quae. Sequi vero vel laudantium! Dolore, iste explicabo! Blanditiis officiis facere natus vitae.
							</li>
							<li className={styles.priorityItem}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti incidunt, dolorem sunt rem odio tempore totam quae. Sequi vero vel laudantium! Dolore, iste explicabo! Blanditiis officiis facere natus vitae.
							</li>
							<li className={styles.priorityItem}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti incidunt, dolorem sunt rem odio tempore totam quae. Sequi vero vel laudantium! Dolore, iste explicabo! Blanditiis officiis facere natus vitae.
							</li>
							<li className={styles.priorityItem}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti incidunt, dolorem sunt rem odio tempore totam quae. Sequi vero vel laudantium! Dolore, iste explicabo! Blanditiis officiis facere natus vitae.
							</li>
							<li className={styles.priorityItem}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti incidunt, dolorem sunt rem odio tempore totam quae. Sequi vero vel laudantium! Dolore, iste explicabo! Blanditiis officiis facere natus vitae.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Priority