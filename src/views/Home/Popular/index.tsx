import clsx from 'clsx'

import camera from '@/assets/image/camera.png'
import laptop from '@/assets/image/laptop1.png'
import headphone from '@/assets/image/heaedphone.png'
import smartphone from '@/assets/image/smartphone.png'
import watch from '@/assets/image/watch.png'
import tablet from '@/assets/image/tablet.png'

import Category from './category'
import styles from './popular.module.scss'
const Popular = () => {
	const categories = [
		{
			urlImage: camera,
			category: 'Camera',
			stock: 9
		},
		{
			urlImage: laptop,
			category: 'Laptop',
			stock: 25
		},
		{
			urlImage: headphone,
			category: 'Headphone',
			stock: 57
		},
		{
			urlImage: smartphone,
			category: 'Smartphone',
			stock: 5
		},
		{
			urlImage: tablet,
			category: 'Tablet',
			stock: 65
		},
		{
			urlImage: watch,
			category: 'Smartwatches',
			stock: 115
		}
	]
	return(
		<div className={clsx(styles.container)}>
			{/* <h2 className={clsx(styles.title)}>Popular Categories</h2> */}
			<div className={clsx(styles.context)}>
				{categories.map((item) => (
					<Category key={item.category} urlImage={item.urlImage} category={item.category} stock={item.stock} />
				))}
			</div>
		</div>
	)
}

export default Popular