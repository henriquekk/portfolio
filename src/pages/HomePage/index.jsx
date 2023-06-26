import React from 'react'
import styles from './HomePage.module.scss'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Hero from '../../components/Hero'
import About from '../../components/About'

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
    </>
  )
}
