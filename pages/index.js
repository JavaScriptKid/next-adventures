import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Counter from '../components/Counter'

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
      <button onClick={this.handleClick}>Hello, World!</button>
      <Counter />
    </div>
  }
}
