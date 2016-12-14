import React from 'react'
import Link from 'next/link'

const HomePage = () => (
  <div className="jumbotron center">
    <h1 className="lead">
      Welcome to Media Library built with Next
    </h1>
    <Link href="/gallery">
      Visit Library
    </Link>
  </div>
)

export default HomePage
