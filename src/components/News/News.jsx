import styles from './News.module.css'
import cat from '../../assets/img/Cats/cat.png'

const News = () => {
	return (
		<div className='devWrapper'>
			<div className='dev'>About is in development</div>
			<img src={cat} width='400' height='400' alt="" />
		</div>
	)
}

export default News