import React from 'react';
import styles from './ProjectsMirror.module.scss';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function ProjectsMirror({ titulo, descricao, imagem, github, liveLink, texto1 }) {
  return (
    <>
      <section className={styles.projects_section}>
        <div className={styles.projects_desc}>
          <h1>{titulo}</h1>
          <p>{descricao}</p>
          <p>{texto1}</p>
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
        <Link to={liveLink} target='_blank'>
          <img className={styles.banner_img} src={imagem} alt={titulo}/>
        </Link>
      </section>
    </>
  )
}
