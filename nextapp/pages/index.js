import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>HomePage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum ipsam quod doloremque maiores vel recusandae earum asperiores sequi velit esse impedit veniam aut, aliquam cupiditate dolores consequatur numquam fugit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum ipsam quod doloremque maiores vel recusandae earum asperiores sequi velit esse impedit veniam aut, aliquam cupiditate dolores consequatur numquam fugit.</p>
      <Link href="/members"><a>See Member Listings</a></Link>
      <Footer />
    </div>
  )
}
