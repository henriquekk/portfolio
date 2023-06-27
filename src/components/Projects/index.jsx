import React from 'react';
import styles from './Projects.module.scss';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs'

export default function Projects({ titulo, descricao, imagem, github, liveLink }) {
  return (
    <>
      <section className={styles.projects_section} id='projects'>
        <Link to={liveLink} target='_blank'>
          <img src={imagem} alt={titulo}/>
        </Link>
        <div className={styles.projects_desc}>
          <h1>{titulo}</h1>
          <p>{descricao}</p>
          <div className={styles.project_links}>
            <Link to={github} target='_blank'>
              <BsGithub color='#000' size={30}/>
              <p>Github</p>
            </Link>
            <Link to={liveLink} target='_blank'>
              <FiExternalLink color='#000' size={30}/>
              <p>Live</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
