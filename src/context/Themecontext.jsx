"use client";

import { createContext, useState, useContext, useEffect } from "react";
// import {toggle} from '@/components/Themetoggle/Themefile'

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || 'light' ;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=>{
    return getFromLocalStorage() || 'light'
  });


  useEffect(()=>{
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme}}>
      {children}
    </ThemeContext.Provider>

  );
};
