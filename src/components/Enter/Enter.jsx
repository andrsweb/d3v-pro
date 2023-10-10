import { useEffect } from 'react';
import styles from './Enter.module.css'
import { initCanvas } from '../../assets/js/canvas'
import EnterLink from '../UX/EnterLink/EnterLink'


const Enter = () => {

	useEffect(() => {
		initCanvas()
	}, [])

	return (
		<div>
			<section className={styles.enter} id="enter">
				<div className={styles.enterWrapper}>
					<div className={styles.enterTitle}>
						<span className={styles.h1Part}>Welcome to</span>
						<h1 className={styles.h1} data-text="d3v.pro">d3v.pro</h1>
					</div>
					<EnterLink text="Click to enter" />
				</div>
				<canvas className={styles.canvas} id="canvas"></canvas>
			</section>
		</div>
	)
}

export default Enter