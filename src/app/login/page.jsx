"use client"

import React from 'react'
import styles from '../Login/page.module.css'
import { signIn, useSession } from 'next-auth/react'

const page = () => {
  const {data , status} = useSession();
  console.log(data , status);
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.socialbutton}>Sign in with Facebook</div>
        <div className={styles.socialbutton} on onClick={()=>{signIn("google")}}>Sign in with Google</div>
        <div className={styles.socialbutton}>Sign in with Github</div>
        </div>
    </div>
  )
}

export default page