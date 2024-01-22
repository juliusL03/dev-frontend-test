import {useState} from 'react'
import clsx from 'clsx'
import {PhoneOutlined} from '@ant-design/icons'

import DropdownAnt from '@/components/common/elements/Dropdown-antd'

import HeadNavMenu from '../Menu'

import styles from './bottoNav.module.scss'


const BottomNav: React.FC = () => {
	const [brand, setBrand] = useState('')
	console.log(brand)
	return (
		<div className={clsx(styles.container)}>
			<div className={clsx(styles.controlScreen)}>
				<div className={clsx(styles.content)}>
					<div className={clsx(styles.menuSection)}>
						<div className={clsx(styles.laptop)}>
							<DropdownAnt
								onSelect={setBrand}
								listItems={['All Laptop', 'Acer', 'Apple', 'Azus', 'HP', 'Lenovo']}
							/>
						</div>
						<HeadNavMenu />
					</div>
					<div className={clsx(styles.contact)}>
						<div><PhoneOutlined style={{fontSize: '25px', color: '#fc7d28'}}/></div>
						<div className={clsx(styles.info)}>
							<span className={clsx(styles.textSm)}>Cellphone</span>
							<span className={clsx(styles.textMd)}>+(63)997-1234-567</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BottomNav
