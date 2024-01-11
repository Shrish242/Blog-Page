import React from 'react';
import styles from './homepage.module.css';
import Featured from '../components/Featured/Featured.jsx';
import Category from '../components/Category/Category.jsx';
import Cardlist from '../components/Cardlist/Cardlist.jsx';
import Menu from '../components/Menu/Menu.jsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Category />
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
}
