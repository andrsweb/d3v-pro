import styles from './Home.module.css'
import Hero from './Hero/Hero'
import Slider from './Slider/Slider'
import Info from './Info/Info'

const Home = () => {
	return (
		<>
			<Hero />
			<Slider />
			<Info />
		</>
	)
}

export default Home