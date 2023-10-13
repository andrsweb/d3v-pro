import styles from './NotFound.module.css'
import Img from '../Img/Img'
import cat1 from '../../assets/img/notFound/404-1.png'
import cat2 from '../../assets/img/notFound/404-2.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NotFound = () => {
	const [text, setText] = useState('on the top')

	window.addEventListener('resize', () => {
		if (window.innerWidth > 1800) {
			setText('on the right')
		} else setText('on the top')
	})

	return (
		<div className="wrapper">
			<div className={styles.notFoundWrapper}>
				<div className={styles.notFoundText}>
					This page does not exist
				</div>
				<Link className={styles.link} to="/">
					Go to main page
				</Link>
				<div className={styles.catWrapper}>
					<div className={styles.catInner}>
						<div id='dialogueText' className={styles.catDialogue}>
							Hi! My name is Cheech. <br />
							I'm a bug expert on d3v.pro <br />
							I saw that you entered an incorrect address. <br />
							Please check the address bar or go to the main page by clicking on the button {text}.
						</div>
						<Img srcSet={cat1} className={styles.cat} src={cat1} width="350" height="350" />
						<Img srcSet={cat2} className={styles.catMouth} src={cat2} width="350" height="350" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotFound