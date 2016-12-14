import React from 'react'
import cowsay from 'cowsay-browser'
import Header from '../components/Header'

export default () => (
  <div>
    <Header />
    <div id="cows">
      <pre>{ cowsay.say({ text: 'yo, nutter from the distant past!', e: 'e0', T: 'U ' }) }</pre>
      <pre>{ cowsay.think({ f: 'beavis.zen', text: ' ... ' }) }</pre>
      <pre>{ cowsay.say({ text: 'You need to hear this!', e: 'oo' }) }</pre>
    </div>
  </div>
)
