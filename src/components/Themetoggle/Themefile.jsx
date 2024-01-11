"use client";

import React, { useContext } from 'react'
import styles from './Themetoggle.module.css'
import Image from 'next/image'
import Sun from '../Image/sun.png'
import Moon from '../Image/moon.png'
import { ThemeContext } from '../../context/Themecontext.jsx'

const Themefile = () => {
  const { theme , setTheme } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={() => 
      setTheme (theme === 'light' ? 'dark' : 'light')
    } style={theme === 'dark' ? {backgroundColor:"white"} : {background: "#0f172a"}}>
      <Image src={Moon} alt='Moon' width={14} height={14}></Image>
      <div className={styles.ball} style={theme === 'dark' ? {left: 1, background:"#0f172a"} : {right:1 , background: "white"}}></div>
      <Image src={Sun} alt='Sun' width={14} height={14} left={1}></Image>
    </div>
  )
}

export default Themefile