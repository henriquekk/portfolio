import React from 'react';
import styles from './About.module.scss';

export default function About() {
  return (
    <section className={styles.about_section} id='about'>

      <img src='https://github.com/maykbrito.png'/>
      <div className={styles.about_text}>
        <h1>Sobre mim</h1>
        <p>Meu nome é Henrique Guerrato, nasci dia 10 de agosto de 2000 em São Paulo - SP e atualmente estou morando em Bertioga - SP.</p> 
        <p>Sou desenvolvendor front-end júnior, estou em busca de um primeiro emprego na area. Falo inglês em nivel intermediário/avançado. Tenho habilidades e conhecimento solido em HTML, CSS, JavaScript, React e Git e conhecimento intermediário em WordPress, Sass e PHP.</p> 
        <p>Tenho muita vontade de trabalhar, gosto de aprender constantemente principalmente sobre essa area e tenho conforto em trabalhar em equipe.</p>
      </div>
    </section>
  )
}
