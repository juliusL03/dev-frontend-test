import clsx from 'clsx'
import {Fragment, useState,} from 'react'

import DropdownAnt from '@/components/common/elements/Dropdown-antd'

import styles from './submenu.module.scss'

const SubmenuSecondary: React.FC = () => {
	const [language, setLanguage] = useState('')
	const [dollar, setDollar] = useState('')
	const [opt, setOpt]= useState('')
	console.log(language, dollar, opt)
	return (
		<div className={clsx(styles.container)}>
			<div className={clsx(styles.wrapper)}>
				<div className={clsx(styles.content)}>
					<Fragment>
						<DropdownAnt onSelect={setLanguage} listItems={['English', 'Filipino']} />
						<DropdownAnt onSelect={setDollar} listItems={['USD', 'SGD', 'PHP']} />
						<DropdownAnt onSelect={setOpt} listItems={['Setting']} />
					</Fragment>
				</div>
			</div>
		</div>
	)
}

export default SubmenuSecondary
