import React from 'react'
import { css } from 'next/css'
import Link from 'next/link'
let navStyle = css({
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  zIndex: '1',
  height: '60px'
})
export default class Nav extends React.Component {
  render() {
    const page = this.props.page
    return (
      <nav className="nav" {...navStyle}>
        <ul>
          <li>
            <Link href="/alt">Home</Link>
          </li>
          <li>
            <Link href="/around">About</Link>
          </li>
          <li>
            <Link href="/"><i className="logo"></i></Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
