import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import styles from './popular.module.scss'

type props = {
 urlImage: any,
 category: string,
 stock: number
}
const Category: React.FC<props> = ({urlImage, category, stock}) => {
	return(
		<div className={clsx(styles.cardWrap)}>
			<div className={clsx(styles.cardImg)}>
				<Image src={urlImage} alt={category} className={clsx(styles.imgView)} width={63}/>
			</div>
			<p className={clsx(styles.name)}>{category}</p>
			<span className={clsx(styles.stock)}>{stock} Products</span>
		</div>
	)
}

export default Category