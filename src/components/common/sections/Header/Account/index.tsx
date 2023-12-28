import {HeartOutlined, InboxOutlined, ShoppingOutlined, UserOutlined} from '@ant-design/icons'
import React from 'react'
import {Avatar, Badge, Space} from 'antd'
import clsx from 'clsx'

import styles from './account.module.scss'

const Account: React.FC = () => (
	<section className={clsx(styles.isMobile)}>
		<Space direction="horizontal" size={16}>
			<Space wrap size={16}>
				<Avatar shape="square" style={{backgroundColor: '#111827'}} size={44} icon={<UserOutlined />} />
				<div className={clsx(styles.accountSection)}>
					<span>Sign In</span>
					<span className={clsx(styles.me)}>Guest</span>
				</div>
				<Badge count={0}>
					<Avatar style={{backgroundColor: '#ff620044', color:'#111827'}} size={40} icon={ <InboxOutlined />} />
				</Badge>
			</Space>
			<Badge count={2}>
				<Avatar style={{backgroundColor: '#ff620044', color:'#111827'}} size={40} icon={<HeartOutlined />} />
			</Badge>
			<Badge count={2}>
				<Avatar style={{backgroundColor: '#ff620044', color:'#111827'}} size={40} icon={<ShoppingOutlined />} />
			</Badge>
		</Space>
	</section>
)

export default Account