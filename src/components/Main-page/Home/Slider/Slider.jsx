import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import styles from './Slider.module.css'
import html from '../../../../assets/img/Ico/html.svg'
import css from '../../../../assets/img/Ico/css.svg'
import scss from '../../../../assets/img/Ico/scss.svg'
import tailwind from '../../../../assets/img/Ico/tailwind.svg'
import js from '../../../../assets/img/Ico/js.svg'
import react from '../../../../assets/img/Ico/react.svg'
import redux from '../../../../assets/img/Ico/redux.svg'
import mobx from '../../../../assets/img/Ico/mobx.svg'
import git from '../../../../assets/img/Ico/git.svg'
import github from '../../../../assets/img/Ico/github.svg'
import gulp from '../../../../assets/img/Ico/gulp.svg'
import vite from '../../../../assets/img/Ico/vite.svg'
import { Autoplay } from 'swiper/modules';

const Slider = () => {
	return (
		<section className={styles.mainSlider}>
			<Swiper spaceBetween={0} slidesPerView={5} loop={true} centeredSlides={true} speed={4000} allowTouchMove={false} modules={[Autoplay]} autoplay={{
				delay: 0,
				disableOnInteraction: false,
			}}>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={html} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							HTML5
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={css} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							CSS3
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={scss} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							SCSS
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={tailwind} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							TAILWIND CSS
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={js} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							JAVASCRIPT
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={react} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							REACT JS
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={redux} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							REDUX
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={mobx} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							MOBX
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={git} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							GIT
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={github} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							GITHUB
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={gulp} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							GULP4
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.sliderWrapper}>
						<img className={styles.swiperSlideImg} src={vite} width='80' height='80' loading='lazy' alt="" />
						<a className={styles.sliderLink} href="#">
							VITE
						</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default Slider