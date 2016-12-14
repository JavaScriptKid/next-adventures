import React from 'react'
import Header from '../components/Header'
import style from 'next/css'

export default () => (
  <div>
    <Header />
    <div className={styles}>
      <p>Hello World</p>
    </div>
  </div>
)

const styles = style({
  font: '15px Helvetica, Arial, sans-serif',
  background: '#eee',
  padding: '100px',
  textAlign: 'center',
  transition: '100ms ease-in background',
  ':hover': {
    background: '#ccc'
  }
})
