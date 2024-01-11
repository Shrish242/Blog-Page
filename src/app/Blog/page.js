
import React from 'react'
import styles from './page.module.css'
import Card from '../../components/Cardlist/Cardlist.jsx'
import Menu from '../../components/Menu/Menu.jsx'

const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Page</h1>
      <div className={styles.content}>
        <Card/>
        <Menu/>
      </div>
    </div>
  )
}

export default Page