/* eslint-disable no-console */
import clsx from 'clsx'
import {useState} from 'react'
import {SearchOutlined} from '@ant-design/icons'

import styles from './search.module.scss'
import DropdownBrand from './dropdown'

const Search: React.FC = () => {
	const [brand, setBrand] = useState('')
	// const [category, setCategory] = useState('')

	const onSearch = () => {
		console.log(brand)
	}

	onSearch()

	return (
		<div className={clsx(styles.container)}>
			<div className={clsx(styles.wrapper)}>
				<div className={clsx(styles.inputSection)}>
					<input className={clsx(styles.text)} placeholder="Search Product"/>
					<div className={clsx(styles.dropdown)}>
						<DropdownBrand onSelect={setBrand} listItems={['All Brand', 'Acer', 'Hp', 'Lenovo']} />
						{/* <DropdownBrand onSelect={setCategory} listItems={['All Categories', 'Camera', 'Laptop', 'Smartphone', 'Headphone']} /> */}
					</div>
				</div>
				<button className={clsx(styles.button)}>
					<SearchOutlined style={{fontSize: '22px'}}/>
				</button>
			</div>
		</div>
	)
}

export default Search
