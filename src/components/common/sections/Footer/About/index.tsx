import clsx from 'clsx'

import styles from './about.module.scss'

const About: React.FC = () => {
	return (
		<div className={clsx(styles.container)}>
			<h2>About</h2>
			<a href="#" className={clsx(styles.name)}>Contact Us</a>
			<a href="#" className={clsx(styles.name)}>About Us</a>
		</div>
	)
}

export default About