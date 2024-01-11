"use client";

import {React, useContext, useState, useEffect} from 'react'
import { ThemeContext } from '../context/Themecontext';

const Themeprovider = ({children}) => {
  const { theme } = useContext(ThemeContext);
  const[mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  }, [])

  return (
    <div className={theme}>{children}</div>
  )
}

export default Themeprovider