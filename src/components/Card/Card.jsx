"use client"

import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Lifestyle from '../Image/lifestyle.jpg'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src={Lifestyle} alt="post" className={styles.img}/>
          </div>
          <div className={styles.textconatiner}>
            <div className={styles.detail}>
             <span className={styles.date}>11.06.2023 - </span>
             <span className={styles.category}>Culture</span>
            </div>
            <h1 className={styles.head}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className={styles.des}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo debitis nam, soluta,
               amet id reiciendis veritatis ullam sit atque earum beatae doloribus iusto. Vel sint 
               corrupti iste dolorum tempore!
            </p>
            <Link href='/link' className={styles.link}>Read More</Link>
          </div>
    </div>
  )
}

export default Card