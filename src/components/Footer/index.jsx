import React from 'react';
import styles from './Footer.module.scss';
import { TfiEmail } from 'react-icons/tfi';
import { SiLinkedin } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className={styles.footer} id='contact'>
      <div className={styles.footer_area}>
        <h1>Entre em contato comigo</h1>
        <div className={styles.gmail}>
          <TfiEmail size={40}/>
          <p>henrique.guerrato@gmail.com</p>
        </div>
        
      </div>
    </footer>
  )
}
