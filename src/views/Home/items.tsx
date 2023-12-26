import clsx from 'clsx'
import {NextPage} from 'next'

import CardItem from '@/components/common/products/CardItem'

import styles from './home.module.scss'


const DisplayItems: NextPage = () => {

	return (
		<div>
			<h3>LAPTOP</h3>
			<div className={clsx(styles.displayItems)}>
				<CardItem image={'/hp.jpg'} name={'HP VICTUS 15-FA0152TX GAMING'} price={'100.00'} discount="-50%" oldPrice="₱ 200"/>
				<CardItem image={'/hp.jpg'} name={'hp'} price={'100.00'} discount="-50%" oldPrice="₱ 200"/>
				<CardItem image={'/hp.jpg'} name={'hp'} price={'100.00'} discount="-50%" oldPrice="₱ 200"/>
				<CardItem image={'/hp.jpg'} name={'hp'} price={'100.00'} discount="-50%" oldPrice="₱ 200"/>
				<CardItem image={'/hp.jpg'} name={'hp'} price={'100.00'} discount="-50%" oldPrice="₱ 200"/>
			</div>
		</div>
	)
}

export default DisplayItems
