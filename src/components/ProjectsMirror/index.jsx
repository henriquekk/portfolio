import React from 'react';
import styles from './ProjectsMirror.module.scss';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs'

export default function ProjectsMirror({ titulo, descricao, imagem, github, liveLink }) {
  return (
    <>
      <section className={styles.projects_section}>
        <div className={styles.projects_desc}>
          <h1>{titulo}</h1>
          <p>{descricao}</p>
          <div className={styles.project_links}>
            <a href={github} target='_blank'>
              <BsGithub color='#000' size={30}/>
              <p>Github</p>
            </a>
            <a href={liveLink} target='_blank'>
              <FiExternalLink color='#000' size={30}/>
              <p>Live</p>
            </a>
          </div>
        </div>
         <img src={imagem} alt={titulo}/>
      </section>
    </>
  )
}
