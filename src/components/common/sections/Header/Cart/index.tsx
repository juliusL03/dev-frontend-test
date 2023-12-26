import {ShoppingCartOutlined} from '@ant-design/icons'
import clsx from 'clsx'

import styles from './cart.module.scss'



const CartCount: React.FC = () => {
	return (
		<div className={clsx(styles.container)}>
			<div className={clsx(styles.cartCount)}>
				<div className={clsx(styles.badge)}>
					<p className={clsx(styles.count)}>7</p>
				</div>
				<ShoppingCartOutlined style={{fontSize: '46px', color: '#03133B'}}/>
			</div>
		</div>


	)
}

export default CartCount