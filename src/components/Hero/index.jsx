import React from 'react';
import styles from './Hero.module.scss';
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoSass } from 'react-icons/bi'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <>
      <div className={styles.hero_content}>
        <div className={styles.hero_text}>
          <h1>Front-End Developer</h1>
          <p>Olá, meu nome é Henrique Guerrato. Sou desenvolvedor Front-End e atualmente estou morando em Bertioga - São Paulo.</p>
          <div className={styles.social}>
            <FaGithubSquare size={40}/>
            <FaLinkedin size={40}/>
          </div>
          <div className={styles.skills}>
            <h3>Skills</h3>
            <BiLogoHtml5 size={50}/>
            <BiLogoCss3 size={50}/>
            <BiLogoJavascript size={50}/>
            <BiLogoReact size={50}/>
            <BiLogoSass size={50}/>
          </div>
        </div>
        <img src="https://github.com/henriquekk.png" alt='Foto de Henrique Guerrato'/>
        
      </div>
    </>
  )
}
