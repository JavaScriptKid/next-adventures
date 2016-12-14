import React from 'react'
import Link from 'next/link'

const styles = {
  a: {
    marginRight: 10
  }
}

export default () => (
  <div>
    <Link href='/'>
      <a style={styles.a} >Home</a>
    </Link>

    <Link href='/about'>
      <a style={styles.a} >About</a>
    </Link>

    <Link href='/hover'>
      <a style={styles.a} >Hover</a>
    </Link>

    <Link href='/cowsay'>
      <a style={styles.a} >Cowsay</a>
    </Link>

    <Link href='/gallery'>
      <a style={styles.a} >Gallery</a>
    </Link>

    <Link href='/profile'>
      <a style={styles.a} >Profile</a>
    </Link>
  </div>
)
