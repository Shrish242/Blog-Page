import React from 'react'
import styles from '../Login/page.module.css'

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.socialbutton}>Sign in with Facebook</div>
        <div className={styles.socialbutton}>Sign in with Google</div>
        <div className={styles.socialbutton}>Sign in with Github</div>
        </div>
    </div>
  )
}

export default page