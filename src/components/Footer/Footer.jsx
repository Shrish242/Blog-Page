import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import logo from '../Image/zoro.jpeg'
import Facebook from '../Image/Facebook.png'
import Instagram from '../Image/Insta.png'
import X from '../Image/X.png'
import Discord from '../Image/Discord.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image className={styles.imglogo} src={logo} alt='shrish blog' width={50} height={50}/>
          <h1 className={styles.logotext}>Shrish Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In  
          aspernatur, iure eligendi laudantium vero! Reiciendis, amet! 
          Amet eligendi eveniet facere molestiae dignissimos modi, at.
        </p>
        <div className={styles.socials}>
        <Image src={Facebook} alt='facebook' width={24} height={24}/>
        <Image src={Instagram} alt='Instagram' width={24} height={24}/>
        <Image src={X} alt='X' width={25} height={24}/>
        <Image src={Discord} alt='Discord' width={26} height={24}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listtittle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About us</Link>
          <Link href='/'>Contact us</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listtittle}>Tags</span>
          <Link href='/'>Travel</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Style</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listtittle}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Disord</Link>
          <Link href='/'>X</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer