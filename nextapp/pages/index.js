import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum ipsam quod doloremque maiores vel recusandae earum asperiores sequi velit esse impedit veniam aut, aliquam cupiditate dolores consequatur numquam fugit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum ipsam quod doloremque maiores vel recusandae earum asperiores sequi velit esse impedit veniam aut, aliquam cupiditate dolores consequatur numquam fugit.</p>
      <Link href="/members">
        <a className={styles.btn}>See Member Listing</a>
        </Link>
    </div>
  )
}
