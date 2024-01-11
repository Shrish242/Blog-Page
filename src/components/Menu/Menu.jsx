import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Lifestyle from '../Image/lifestyle.jpg'

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* <h2 className={styles.subtitle}>{"What's hot?"}</h2> */}
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href='/' className={styles.item}>
          {/* <div className={styles.imgContainer}>
            <Image alt='' fill src={Lifestyle} className={styles.image}></Image>
          </div> */}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.date}>May 16, 2021 - </span>
              <span className={styles.username}>Shrish Dhakal</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          {/* <div className={styles.imgContainer}>
            <Image alt='' fill src={Lifestyle} className={styles.image}></Image>
          </div> */}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.date}>May 16, 2021 - </span>
              <span className={styles.username}>Shrish Dhakal</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          {/* <div className={styles.imgContainer}>
            <Image alt='' fill src={Lifestyle} className={styles.image}></Image>
          </div> */}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>Coding</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.date}>May 16, 2021 - </span>
              <span className={styles.username}>Shrish Dhakal</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          {/* <div className={styles.imgContainer}>
            <Image alt='' fill src={Lifestyle} className={styles.image}></Image>
          </div> */}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.date}>May 16, 2021 - </span>
              <span className={styles.username}>Shrish Dhakal</span>
            </div>
          </div>
        </Link>
      </div>
      <h3 className={styles.subtopic}>Discover by Topic</h3>
      <h1 className={styles.topic}>Categories Pick</h1>
      <div className={styles.categorylist}>
        <Link href='/' className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
        <Link href='/' className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
        <Link href='/' className={`${styles.categoryItem} ${styles.coding}`}>Coding</Link>
        <Link href='/' className={`${styles.categoryItem} ${styles.culture}`}>Culture</Link>
        <Link href='/' className={`${styles.categoryItem} ${styles.fashion}`}>Fashion</Link>
      </div>
      <h1 className={styles.title}>Editor's Picks</h1>
      <div className={styles.items}>
        <Link href='/' className={styles.item}>
          <div className={styles.imgContainer}>
            <Image alt='' fill src={Lifestyle} className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.date}>May 16, 2021 - </span>
              <span className={styles.username}>Shrish Dhakal</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imgContainer}>
            <Image alt='' fill src={Lifestyle} className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.date}>May 16, 2021 - </span>
              <span className={styles.username}>Shrish Dhakal</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imgContainer}>
            <Image alt='' fill src={Lifestyle} className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>Coding</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.date}>May 16, 2021 - </span>
              <span className={styles.username}>Shrish Dhakal</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imgContainer}>
            <Image alt='' fill src={Lifestyle} className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
            <h3 className={styles.posttitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.date}>May 16, 2021 - </span>
              <span className={styles.username}>Shrish Dhakal</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu