import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import styles from './arrivals.module.scss'

type props = {
 urlImage: any,
 name: string,
 rate: string,
 price: string
}
const Stock: React.FC<props> = ({urlImage, name, rate, price}) => {
	return(
		<div className={clsx(styles.cardWrap)}>
			<div className={clsx(styles.cardImg)}>
				<Image src={urlImage} alt={name} className={clsx(styles.imageView)}/>
			</div>
			<div className={clsx(styles.label)}>
				<label className={clsx(styles.name)}>{name}</label>
				<label className={clsx(styles.rate)}>({rate})</label>
				<label className={clsx(styles.price)}>₱ {price}</label>
			</div>
		</div>
	)
}

export default Stock