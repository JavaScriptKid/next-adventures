import React from 'react'
import Link from 'next/link'

import { css } from 'next/css'

let linkContainer = css({
  padding: '1em',
  ':hover': {
    backgroundColor: 'lightslategrey'
  },
  '> a': {
    textDecoration: 'none',
    color: 'hotpink',
    ':hover': {
      color: 'slategrey'
    },
    ':active': {
      color: 'slategrey'
    }
  }
})
let headerContainer = css({
  height: '3.5em',
  backgroundColor: 'slategrey',
  borderBottom: '1px solid #999',
  font: '20px Arial',
  display: 'flex',
  justifyContent: 'stretch'
})

export default () => (
  <div>
    <div {...headerContainer}>
      <div {...linkContainer}>
        <Link href='/'>
          Home
        </Link>
      </div>
      <div {...linkContainer}>
        <Link href='/about'>
          About
        </Link>
      </div>
      <div {...linkContainer}>
        <Link href='/hover'>
          Hover
        </Link>
      </div>
      <div {...linkContainer}>
        <Link href='/levitator'>
          Levitate
        </Link>
      </div>
      <div {...linkContainer}>
        <Link href='/cowsay'>
          Cowsay
        </Link>
      </div>
      <div {...linkContainer}>
        <Link href='/gallery'>
          Gallery
        </Link>
      </div>
      <div {...linkContainer}>
        <Link href='/profile'>
          Profile
        </Link>
      </div>
    </div>
  </div>
)
