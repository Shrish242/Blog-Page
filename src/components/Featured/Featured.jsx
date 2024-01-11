import React from 'react'
import styles from '../Featured/Featured.module.css'
import Image from 'next/image'
import Image1 from '../Image/image1.jpg'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b >Hey, It's Shrish.</b>Discover my Stories and Projects.
      </h1>
    <div className={styles.post}>
    <div className={styles.imgContainer}>
      <Image src={Image1} alt='' fill className={styles.image}></Image>
    </div>
    <div className={styles.textContainer}>
      <h1 className={styles.posttitle}>Welcome to the Blog. </h1>
      <p className={styles.postdetails}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum magni,
         ut at suscipit animi dolore asperiores ratione fuga nobis corporis repudiandae
          excepturi nisi, recusandae a quasi fugit sunt ab.</p>
      <button className={styles.button}>Read More</button>
    </div>
    </div>  
    </div>
  )
}

export default Featured