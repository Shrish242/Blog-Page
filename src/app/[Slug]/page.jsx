import React from 'react'
import styles from './SinglePage.module.css'
import Image from 'next/image'
import pic from '../../components/Image/coding.jpg'
import Menu from '../../components/Menu/Menu.jsx'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infocontainer}>
        <div className={styles.textcontainer}>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userimage}>
              <Image src={pic} alt='' fill className={styles.image}/>
            </div>
            <div className={styles.usertextconatiner}>
              <span className={styles.username}>Shrish Dhakal</span>
              <span className={styles.date}>12-12-2023</span>
            </div>
          </div>
          </div>
          <div className={styles.imgcontainer}>
          <Image src={pic} alt='' fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}></div>
      <Menu/>
      </div>
    </div>
  )
}

export default SinglePage