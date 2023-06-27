import React from 'react'
import styles from './HomePage.module.scss'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'
import ProjectsMirror from '../../components/ProjectsMirror'
import imgProgress from '../../assets/images/desenvolvimento.png'
import imgOlaMundo from '../../assets/images/ola_mundo.png'

export default function HomePage() {
  return (
    <>
      <Header/>
      <Container>
        <Hero/>
      </Container>
      <Container>
        <About/>
      </Container>
      <Container>
        <Projects 
          titulo={'Olá, mundo!'} 
          descricao={'Esse foi um dos primeiros projetos que eu fiz com os aprendizados das aulas da plataforma Alura. Esse projeto foi desenvolvido com React.'}
          imagem={imgOlaMundo}
          github={'https://github.com/henriquekk/alura-react-ola-mundo'}
          liveLink={'https://alura-ola-mundo-gamma.vercel.app/'}
        >
        </Projects>
        <ProjectsMirror 
          titulo={'Em desenvolvimento...'} 
          descricao={''}
          imagem={imgProgress}
        >
        </ProjectsMirror>
        <Projects 
          titulo={'Em desenvolvimento...'} 
          descricao={''}
          imagem={imgProgress}
        >
        </Projects>
      </Container>
      <Footer/>
    </>
  )
}
