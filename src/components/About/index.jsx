import React from 'react';
import styles from './About.module.scss';
import image from '../../assets/images/aboutme.jpg'

export default function About() {
  return (
    <section className={styles.about_section} id='about'>

      <img src={image}/>
      <div className={styles.about_text}>
        <h1>Sobre mim</h1>
        <p>Programador de front-end Junior com conhecimento em HTML, CSS, JavaScript, ReactJS, SASS, Git e Wordpress. Trabalho com extrema atenção aos detalhes, tendo uma boa capacidade de reconhecer, comunicar e corrigir bugs no código front-end.</p> 
        <p>Além do conhecimento técnico, busco sempre aperfeiçoamento profissional através de cursos e treinamentos online, visando sempre ter conhecimento nas tecnologias mais modernas de desenvolvimento web.</p>
      </div>
    </section>
  )
}
