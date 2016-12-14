import React from 'react'
import Header from '../components/Header'
import { style } from 'next/css'

export default ({ url: { query: { id } } }) => (
  <div>
    <Header />
    <div className={style(styles.main)}>
      <h1 className={style(styles.heading)}>
        User profile:
        {' '}
        <b className={style(styles.username)}>{id}</b>
      </h1>
    </div>
  </div>
)

const styles = {
  main: {
    padding: '100px'
  },

  heading: {
    font: '15px Monaco'
  },

  username: {
    color: 'blue'
  }
}
