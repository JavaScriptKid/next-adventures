import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <Link href="/" activeClassName="active">Home</Link>
      {" | "}
      <Link href="/gallery" activeClassName="active">Library</Link>
      {" | "}
      <Link href="/basiccss" activeClassName="active">Basic CSS</Link>
    </nav>
  </div>
)

export default Header
