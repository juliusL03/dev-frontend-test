import React from 'react'
import {Carousel} from 'antd'
import clsx from 'clsx'

import laptop from '@/assets/image/laptop.png'
import hyperX from '@/assets/image/hyperx.png'

import Banner from '../Banner'

import styles from './carousel.module.scss'

const ImageSlider: React.FC = () => (
	<div className={clsx(styles.container)}>
		<div className={clsx(styles.content)}>
			<Carousel autoplay>
				<div className={clsx(styles.item)}>
					<Banner 
						title={'Introducing the New Acer Laptop Series'} 
						subtitle={'unmatched performance in a sleek design.'} 
						link={'/acer/laptop'}
						hero={true}
						image={laptop}
					/>
				</div>
				<div className={clsx(styles.item)}>
					<Banner 
						title={'HyperX Cloud III - Gaming Headset'} 
						subtitle={'Sale 35% off'} 
						link={'/acer/laptop'}
						hero={true}
						image={hyperX}
					/>
				</div>
			</Carousel>
		</div>
	</div>
)

export default ImageSlider