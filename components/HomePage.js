import React from 'react'
import Link from 'next/link'
import Button from './btn'

const HomePage = () => (
  <div className="jumbotron center">
    <h1 className="lead">
      Welcome to Media Library built with Next
    </h1>
    <div>
      <Link href="/gallery">
        <Button>
          Visit Library
        </Button>
      </Link>
    </div>
  </div>
)

export default HomePage
