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
import imgPortfolioModelo from '../../assets/images/portfolio_modelo.png'
import imgDocearte from '../../assets/images/docearte.png'
import imgAmado from '../../assets/images/amadoimg.png'
import Form from '../../components/Form'

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
          titulo={'Amado Maker Editora'} 
          descricao={'Site desenvolvido para a empresa Amado Maker Editora com o intuito de facilitar a divulgação de seus produtos e espalhar a "Cultura Maker" pelo Brasil.'}
          texto1={'O site foi desenvolvido com HTML, CSS, JavaScript e PHP, utilizando WordPress como CMS para tornar mais fácil a administração do site.'}
          imagem={imgAmado}
          github={'https://github.com/henriquekk'}
          liveLink={'https://amadomaker.com.br/'}
        >

        </Projects>
        <ProjectsMirror 
          titulo={'Doce Arte Studio'} 
          descricao={'Catálogo virtual desenvolvido para a empresa Doce Arte Studio com o intuito de facilitar a divulgação de seus produtos e aumentar a sua presença online.'}
          texto1={'O site foi desenvolvido com ReactJS e com o DatoCMS para tornar mais fácil a administração do conteúdo.'}
          imagem={imgDocearte}
          github={'https://github.com/henriquekk'}
          liveLink={'https://docearte.net/'}
        >
        </ProjectsMirror>
        <Projects 
          titulo={'Portfólio Modelo Mirim'} 
          descricao={'Portfólio feito para uma modelo mirim fictícia com o propósito de divulgação de seu trabalho e facilitar o contato profissional.'}
          texto1={'O site foi desenvolvido com ReactJS.'}
          imagem={imgPortfolioModelo}
          github={'https://github.com/henriquekk/portfolio-modelo'}
          liveLink={'https://portfolio-modelo-rho.vercel.app/'}
        >
        </Projects>
      </Container>

      <Form/>

      <Footer/>
    </>
  )
}