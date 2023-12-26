import clsx from 'clsx'

import styles from './payment.module.scss'

const PaymentMethod: React.FC = () => {
	return (
		<div className={clsx(styles.container)}>
			<h2>Payment Method</h2>
		</div>
	)
}

export default PaymentMethod