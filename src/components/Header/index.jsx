import React from 'react'
import styles from './Header.module.scss'
import NavBar from '../NavBar'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>
    </>
  )
}
