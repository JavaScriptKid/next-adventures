import React from 'react'
import Header from '../components/Header'
import style from 'next/css'
import chroma from 'chroma-js'

export default () => (
  <div>
    <Header />
    <button className={styles}>
      <p>Hello World</p>
    </button>
  </div>
)

const styles = style({
  font: '15px Helvetica, Arial, sans-serif',
  background: '#eee',
  padding: '100px',
  textAlign: 'center',
  transition: '100ms ease-in background',
  ':hover': {
    background: chroma('hotpink').css()
  }
})
