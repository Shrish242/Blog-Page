import React from 'react'
import styles from './SinglePage.module.css'
import Image from 'next/image'
import pic from '../../components/Image/coding.jpg'
import Comments1 from '@/components/comments/comments'

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
              <span className={styles.username}>Shrish Dhakal </span>
              <br />
              <span className={styles.date}>12-12-2023</span>
            </div>
          </div>
          </div>
          <div className={styles.imgcontainer}>
          <Image src={pic} alt='' fill className={styles.image}/>
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aperiam recusandae iusto in reiciendis laudantium iste perferendis nesciunt culpa eius hic doloribus labore repellat quaerat, beatae quasi ratione impedit natus?</p>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aperiam recusandae iusto in reiciendis laudantium iste perferendis nesciunt culpa eius hic doloribus labore repellat quaerat, beatae quasi ratione impedit natus?</p>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aperiam recusandae iusto in reiciendis laudantium iste perferendis nesciunt culpa eius hic doloribus labore repellat quaerat, beatae quasi ratione impedit natus?</p>
            </div>
            <div className={styles.comments}>
              <Comments1/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage