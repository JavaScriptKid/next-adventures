import React from 'react'
import Link from 'next/link'

const HomePage = () => (
  <div className="jumbotron center">
    <h1 className="lead">
      Welcome to Media Library built with Next
    </h1>
    <div>
      <Link href="/gallery">
        <button className="btn btn-lg btn-primary">
          Visit Library
        </button>
      </Link>
    </div>
  </div>
)

export default HomePage
