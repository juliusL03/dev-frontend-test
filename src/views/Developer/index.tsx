import clsx from 'clsx'
import {NextPage} from 'next'

import MainNav from '@/components/common/layouts/MainNav'

import styles from './developer.module.scss'
import Info from './info'
import HireMe from './hireme'

const Developer: NextPage = () => {
 
	return(
		<MainNav>
			<div className={clsx(styles.container)}>
				<Info />
				<HireMe />
			</div>
		</MainNav>
	)
}

export default Developer