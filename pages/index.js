import React, { Component, PropTypes } from 'react'
import Header from '../common/Header'
import HomePage from '../components/HomePage'

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        <HomePage />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
