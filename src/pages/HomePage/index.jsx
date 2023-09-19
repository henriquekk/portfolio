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
import imgDocearte from '../../assets/images/docearte.png'

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
          titulo={'Doce Arte Studio'} 
          descricao={'Catálogo virtual para a empresa Doce Arte Studio, desenvolvido com ReactJS. Esse foi o primeiro grande projeto desenvolvido por mim para um cliente real.'}
          imagem={imgDocearte}
          github={'https://github.com/henriquekk'}
          liveLink={'https://docearte.net/'}
        >
        </Projects>
        <ProjectsMirror 
          titulo={'Olá, mundo!'} 
          descricao={'Esse foi um dos primeiros projetos que eu fiz com os aprendizados das aulas da plataforma Alura. Esse projeto foi desenvolvido com ReactJS.'}
          imagem={imgOlaMundo}
          github={'https://github.com/henriquekk/alura-react-ola-mundo'}
          liveLink={'https://alura-ola-mundo-gamma.vercel.app/'}
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