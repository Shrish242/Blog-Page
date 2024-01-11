import React from 'react'
import styles from './Navbar.module.css'
import Facebook from '../Image/Facebook.png'
import Instagram from '../Image/Insta.png'
import X from '../Image/X.png'
import Discord from '../Image/Discord.png'
import Image from 'next/image'
import Themetoggle from '../Themetoggle/Themefile.jsx'
import Authlinks from '../Authlinks/Authlinks.jsx'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={Facebook} alt='facebook' width={24} height={24}/>
        <Image src={Instagram} alt='Instagram' width={24} height={24}/>
        <Image src={X} alt='X' width={25} height={24}/>
        <Image src={Discord} alt='Discord' width={26} height={24}/>

      </div>
      <div className={styles.logo}>Shrish Blog</div>
      <div className={styles.links}>
        <Themetoggle/>
        <Link href='/' className={styles.link}>Homepage</Link>
        <Link href='/about' className={styles.link}>About</Link>
        <Link href='/contact' className={styles.link}>Contact</Link>
        <Authlinks/>
      </div>



    </div>
  )
}

export default Navbar