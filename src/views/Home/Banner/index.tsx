import clsx from 'clsx'
import Image from 'next/image'
import {useRouter} from 'next/router'

import laptop from '@/assets/image/laptop.png'

import styles from './banner.module.scss'

type props = {
 theme: string,
 title: string,
 subtitle: string,
 link: string
}

const Banner: React.FC<props> = ({theme, title, subtitle, link}) => {
	const router = useRouter()
	const onSubmit = () => {
		router.push(link)
	}

	return (
		<div className={clsx(styles.container, styles[theme])}>
			<div className={clsx(styles.text)}>
				<p className={clsx(styles.title)}>{title}</p>
				<p className={clsx(styles.subtitle)}>{subtitle} </p>
				<button className={clsx(styles.shopNow)} onClick={onSubmit}>Shop Now</button>
			</div>
			<div className={clsx(styles.imgSize)}>
				<Image src={laptop} alt={'banner'} layout="responsive"/> 
			</div>
		</div>
	)
}

export default Banner