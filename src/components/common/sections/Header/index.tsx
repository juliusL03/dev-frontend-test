import React, {useState} from 'react'
import {clsx} from 'clsx'

import useStore from '@/utils/store'

import styles from './header.module.scss'
import HeadbarLogo from './Logo'
import Search from './Search'
import BurgerMenu from './burgerMenu'
import BurgerItemMenu from './burgerItems'
import SubmenuSecondary from './TopNav'
import Account from './Account'
import BottomNav from './BottomNav'
import Profile from './Profile'

const Header: React.FC = () => {
	const {authenticated} = useStore ((state) => ({
		authenticated: state.authenticated
	}))

	const [mobileMenu, setMobileMenu] = useState(false)
	const onBurger = () => {
		setMobileMenu(!mobileMenu)
	}

	return (
		<nav className={clsx(styles.navHeader, mobileMenu && styles['navHeight'])}>
			<div className={clsx(styles.subWrapper)}>
				<div className={clsx(styles.subContent)}>
					<div className={clsx(styles.subflex)}>
						<SubmenuSecondary />
					</div>
				</div>
			</div>
			<div className={clsx(styles.navWrapper)}>
				<div className={clsx(styles.navContent)}>
					<HeadbarLogo />
					<Search />
					{authenticated ? <Profile firstName={'new'} /> : <Account />}
					<div className={clsx(styles.humberger)}>
						<BurgerMenu onClick={onBurger} />
					</div>
				</div>
			</div>
			<BottomNav />
			<div className={clsx(!mobileMenu && styles.hide, mobileMenu && styles.mobileMenu)}>
				<BurgerItemMenu />
			</div>
		</nav>
	)
}

export default Header

