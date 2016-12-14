import React, { Component } from 'react'
import { makeTheme } from 'glamor/react'

export const buttonTheme = makeTheme()
// eslint-disable-line
/* @buttonTheme({ backgroundColor: 'blue' }) */
class Button extends Component {
  render() {
    return <button {...this.props} {...this.props[btnStyle.name]}>
      {this.props.children}
    </button>
  }
}
