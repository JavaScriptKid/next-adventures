import React, { Component, PropTypes } from 'react'
import 'glamor/reset'
import Header from '../common/Header'
import HomePage from '../components/HomePage'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomePage />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
