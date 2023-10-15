import styles from './Home.module.css'
import Hero from './Hero/Hero'
import Slider from './Slider/Slider'
import Info from './Info/Info'
import Skills from './Skills/Skills'

const Home = () => {
	return (
		<>
			<Hero />
			<Slider />
			<Info />
			<Skills />
		</>
	)
}

export default Home