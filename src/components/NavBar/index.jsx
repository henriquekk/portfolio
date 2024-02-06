import React from 'react';
import styles from './NavBar.module.scss';
import { Link } from 'react-scroll';

export default function NavBar() {
  return (
    <nav>
      <h3 className={styles.logo_nome}>Henrique Guerrato</h3>
      <ul>
        <li>
          <Link to='hero' spy={true} smooth={true} offset={-300} duration={500}>Home</Link> 
        </li>
        <li>
        <Link to='about' spy={true} smooth={true} offset={-200} duration={500}>Sobre mim</Link>
        </li>
        <li>
        <Link to='projects' spy={true} smooth={true} offset={-150} duration={500}>Projetos</Link>
        </li>
        <li>
        <Link to='contact' spy={true} smooth={true} offset={-150} duration={500}>Contato</Link>
        </li>
      </ul>
    </nav>
  )
}
