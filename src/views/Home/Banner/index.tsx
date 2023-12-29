import clsx from 'clsx'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {ReactNode} from 'react'

import styles from './banner.module.scss'

type props = {
 theme?: string,
 title: string | ReactNode,
 subtitle: string | ReactNode,
 link: string,
 hero?: boolean,
 image?: any

}

const Banner: React.FC<props> = ({theme, title, subtitle, link, hero, image}) => {
	const router = useRouter()
	const onSubmit = () => {
		router.push(link)
	}

	return (
		<div className={clsx(!hero ? styles.container : styles.heroContainer, styles[theme ? theme : ''])}>
			<div className={clsx(!hero? styles.text: '')}>
				<p className={clsx(styles.title)}>{title}</p>
				<p className={clsx(styles.subtitle)}>{subtitle} </p>
				<button className={clsx(styles.shopNow)} onClick={onSubmit}>Shop Now</button>
			</div>
			<div className={clsx(!hero ? styles.imgSize : styles.heroImgSize)}>
				<Image src={image} alt={'banner'} layout="responsive"/> 
			</div>
		</div>
	)
}

export default Banner