import clsx from 'clsx'
import Image from 'next/image'
import {useState} from 'react'

import me from '@/assets/image/juliusL.png'

import styles from './developer.module.scss'
import Contact from './contact'

const HireMe: React.FC = ()=> {
	const [show, setshow] = useState(false)
	return (
		<div className={clsx(styles.container)}>
			<div className={clsx(styles.me)}>
				<div><Image src={me} alt={''} /></div>
				<button onClick={() => setshow(!show)} className={clsx(styles.hireme)}>{!show ? 'Contact Me' : 'Hide the secret'}</button>
				{show ? <Contact /> : ''}
			</div>
		</div>
	)
}

export default HireMe