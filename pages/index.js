import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Button from '../components/btn'
import Counter from '../components/Counter'
import 'glamor/reset'

export default class App extends React.Component {
  handleClick() {
    console.log("clicked!")
  }
  render() {
    return <div>
      <Head>
        <title>JSK's Next Adventures</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <p>HOME PAGE is here!</p>
      <Button onClick={this.handleClick}>Hello, World!</Button>
      <Counter />
    </div>
  }
}
