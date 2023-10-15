import styles from './Projects.module.css'
import cat from '../../assets/img/Cats/cat.png'

const Projects = () => {
	return (
		<div className='devWrapper'>
			<div className='dev'>About is in development</div>
			<img src={cat} width='400' height='400' alt="" />
		</div>
	)
}

export default Projects