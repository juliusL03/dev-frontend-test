import clsx from 'clsx'
import {Fragment,} from 'react'
import {UserOutlined} from '@ant-design/icons'
import {Avatar, Dropdown, MenuProps} from 'antd'
import Link from 'next/link'

import useStore from '@/utils/store'

import HeadNavMenu from '../Menu'

import styles from './submenu.module.scss'
import logout from './logout'

const Submenu: React.FC = () => {
	const {authenticated, user} = useStore((state) => ({
		authenticated: state.authenticated,
		user: state.user
	}))
	const name = user?.first_name ? user.first_name : 'newbie'
	const {Logout, NotificationContextHolder} = logout()

	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Link href={'/account/profile'}>
       my account
				</Link>
			),
		},
		{
			key: '2',
			label: (
				<Logout />
			),
		},
	]

	const LogIn = () => <Link href="/signin" className={clsx(styles.textBabel)}>Log In</Link>
	const LogOut = () => <div className={clsx(styles.textBabel)}>
		<label className={clsx(styles.name)}>Hi {name}!</label>
		<Dropdown menu={{items}} placement="bottom" arrow>
			<Avatar size="small" style={{backgroundColor: '#87d068', marginBottom: 3}} icon={<UserOutlined />} />
		</Dropdown>
	</div>

	return (
		<div className={clsx(styles.container)}>
			{NotificationContextHolder}
			<div className={clsx(styles.wrapper)}>
				<div className={clsx(styles.content)}>
					<Fragment>
						<HeadNavMenu />
						{!authenticated ? <LogIn /> : <LogOut />}
					</Fragment>
				</div>
			</div>
		</div>
	)
}

export default Submenu
