import React from 'react';
import styles from './About.module.scss';

export default function About() {
  return (
    <section className={styles.about_section}>
      
      <img src='https://github.com/maykbrito.png'/>
      <div className={styles.about_text}>
        <h1>Sobre mim</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nostrum maiores nihil architecto earum, vero ex nisi minus nesciunt quaerat reprehenderit porro officia explicabo. Aspernatur 
        doloribus a odit cupiditate harum.</p>
      </div>
    </section>
  )
}
