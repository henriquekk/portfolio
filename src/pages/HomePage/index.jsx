import React from 'react'
import styles from './HomePage.module.scss'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'
import ProjectsMirror from '../../components/ProjectsMirror'

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
          titulo={'Ola mundo!'} 
          descricao={'askdjhansdkjas ndakjsndaksjdnaksjdn aksdjnaskdjn askdjnasdkjnasdkjnasdkjan sdkjansdkjansdkajnsd kajnsdkajsndkasdjn'}
          imagem={'http://github.com/moontieur.png'}
          github={'https://github.com/henriquekk/alura-react-ola-mundo'}
          liveLink={'https://alura-ola-mundo-gamma.vercel.app/'}
        >
        </Projects>
        <ProjectsMirror 
          titulo={'Ola mundo!'} 
          descricao={'askdjhansdkjas ndakjsndaksjdnaksjdn aksdjnaskdjn askdjnasdkjnasdkjnasdkjan sdkjansdkjansdkajnsd kajnsdkajsndkasdjn'}
          imagem={'https://github.com/gabrielaspenha.png'}
          github={'https://github.com/henriquekk/alura-react-ola-mundo'}
          liveLink={'https://alura-ola-mundo-gamma.vercel.app/'}
        >
        </ProjectsMirror>
        <Projects 
          titulo={'Ola mundo!'} 
          descricao={'askdjhansdkjas ndakjsndaksjdnaksjdn aksdjnaskdjn askdjnasdkjnasdkjnasdkjan sdkjansdkjansdkajnsd kajnsdkajsndkasdjn'}
          imagem={'https://github.com/ViniciusRangel23.png'}
          github={'https://github.com/henriquekk/alura-react-ola-mundo'}
          liveLink={'https://alura-ola-mundo-gamma.vercel.app/'}
        >
        </Projects>
      </Container>
      <Footer/>
    </>
  )
}
