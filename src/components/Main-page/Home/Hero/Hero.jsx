
import styles from './Hero.module.css'
import Me from '../../../../assets/img/Hero/me.jpg'
import MeWebp from '../../../../assets/img/Hero/me.webp'
import Img from '../../../Img/Img'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className="container">
				<div className={styles.heroWrapper}>
					<div className={styles.heroHeading}>
						<h1 className='h1'>
							H1 title
						</h1>
						<p className={styles.heroSubtitle}>
							This is subtitle
						</p>
						<div className={styles.heroImg}>
							<Img src={Me} srcSet={MeWebp} />
						</div>
						<p className={styles.heroText}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea est vero maxime sint omnis accusantium fugit animi odit ratione illo aspernatur asperiores consectetur rerum sit nemo minus, molestias praesentium eveniet?
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero