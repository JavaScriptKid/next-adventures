import React from 'react'
import Header from '../components/Header'
import { css, hover } from 'next/css'

let rule = css({
  color: 'red',
  ':hover': {
    color: 'pink'
  },
  '@media(min-width: 300px)': {
    color: 'green',
    ':hover': {
      color: 'yellow'
    }
  }
})

let elHover = hover({ color: 'blue' })

let mono = css({
  fontFamily: 'monospace'
})

let bolder = css({
  fontWeight: 'bolder'
})

let bounce = css.keyframes('bounce', {
  '0%': { transform: 'scale(0.1)', opacity: 0 },
  '60%': { transform: 'scale(1.2)', opacity: 1 },
  '100%': { transform: 'scale(1)' }
})

export default () => (
  <div>
    <Header />
    <div {...rule}>
      zomg?
    </div>
    <div className={`${rule}`}>
      zomg!!?
    </div>
    <div {...css(mono, bolder)} {...elHover}>
      > embolden!?
    </div>
    <div {...css({
      animation: `${bounce} 2s`,
      width: 50, height: 50,
      backgroundColor: 'red'
    })}>
      bounce!
    </div>
  </div>
)
