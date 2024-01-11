import React from 'react'
import styles from '../Category/Category.module.css'  
import Link from 'next/link'
import Image from 'next/image'
import Travel from '../Image/travel.jpg'
import Fashion from '../Image/fashion.jpg'
import LifeStyle from '../Image/lifestyle.jpg'
import Culture from '../Image/culture.jpg'
import Coding from '../Image/coding.jpg'


const Category = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
        <div className={styles.categories}>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.travel}`}>
            <Image src={Travel} alt='' height={32} width={32} className={styles.image} />Travel
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.fashion}`}>
            <Image src={Fashion} alt='' height={32} width={32} className={styles.image} />Fashion
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.lifestyle}`}>
            <Image src={LifeStyle} alt='' height={32} width={32} className={styles.image} />LifeStyle
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.culture}`}>
            <Image src={Culture} alt='' height={32} width={32} className={styles.image} />Culture
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.coding}`}>
            <Image src={Coding} alt='' height={32} width={32} className={styles.image} />Coding
          </Link>
        </div>
    </div>
  )
}

export default Category