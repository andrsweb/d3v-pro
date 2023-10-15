import styles from './Skills.module.css'
import Card from './Card'

const Skills = () => {
	return (
		<section className={styles.skills}>
			<div className="container">
				<div className={styles.skillsWrapper}>
					<Card num='92' text='Html'/>
					<Card num='95' text='Css'/>
					<Card num='82' text='JavaScript'/>
					<Card num='78' text='React JS'/>
					<Card num='70' text='Redux'/>
					<Card num='84' text='Git'/>
				</div>
			</div>
		</section>
	)
}

export default Skills