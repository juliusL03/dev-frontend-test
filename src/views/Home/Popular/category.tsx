import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import styles from './popular.module.scss'

type props = {
 urlImage: any,
 category: string
}
const Category: React.FC<props> = ({urlImage, category}) => {
	return(
		<div className={clsx(styles.cardWrap)}>
			<div className={clsx(styles.cardImg)}>
				<Image src={urlImage} alt={category} className={clsx(styles.imgView)}/>
			</div>
			<p className={clsx(styles.name)}>{category}</p>
		</div>
	)
}

export default Category