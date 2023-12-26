import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/image/new-pccrits-logo-100.png'

import styles from './logo.module.scss'

const HeadbarLogo: React.FC = () => {
	return (
		<Link href="/" className={clsx(styles.logo)}>
			<Image src={logo} alt="PcCrits"/>
		</Link>
	)
}

export default HeadbarLogo