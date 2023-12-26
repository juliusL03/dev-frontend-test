import {Space} from 'antd'
import type {ColumnsType} from 'antd/es/table'

import {DataType} from './types'

export const columns: ColumnsType<DataType> = [
	{
		title: 'Order',
		dataIndex: 'order',
		key: 'order'
	},
	{
		title: 'Placed On',
		dataIndex: 'placed',
		key: 'placed',
	},
	{
		title: 'Items',
		dataIndex: 'items',
		key: 'items',
	},
	{
		title: 'total',
		key: 'total',
		dataIndex: 'total'
	},
	{
		title: '',
		key: 'action',
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		render: (_, _record) => (
			<Space>
				<a>MANAGE</a>
			</Space>
		),
	},
]