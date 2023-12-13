import React from 'react';
import styles from './Footer.module.scss';
import { TfiEmail } from 'react-icons/tfi';
import { SiLinkedin } from 'react-icons/si';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_area}>
        
        <p><strong>Desenvolvido por Henrique Guerrato</strong></p>
        <div className='social-footer'>
          <Link to='https://github.com/henriquekk' target='_blank'><FaGithubSquare color='#000' size={40}/></Link>
          <Link to='https://www.linkedin.com/in/henriqueguerrato' target='_blank'><FaLinkedin color='#000' size={40}/></Link>
        </div>
        

      </div>
    </footer>
  )
}
