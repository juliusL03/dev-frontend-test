import {NextPage} from 'next'

import MainNav from '@/components/common/layouts/MainNav'
import laptop from '@/assets/image/laptop.png'

import Banner from './Banner'
import Popular from './Popular'
import Products from './Products'
import NewArrivals from './NewArrivals'
import HeroSection from './Hero'
import styles from './home.module.scss'

const Home: NextPage = () => {

	return (
		<MainNav>
			<HeroSection />
			<Popular />
			<NewArrivals />
			<div className={styles.center}>
				<Banner 
					theme={'lightblue'} 
					title={'Introducing the New Acer Laptop Series'} 
					subtitle={'unmatched performance in a sleek design.'} 
					link={'/acer/laptop'}
					image={laptop}
				/>
			</div>
			<Products />
		</MainNav>
	)
}

export default Home
