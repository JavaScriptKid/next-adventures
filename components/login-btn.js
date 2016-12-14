import React, { Component } from 'react'
import { Button, buttonTheme } from './btn.js'
import { hover, merge } from 'glamor'

@buttonTheme.add(merge(
  hover({ backgroundColor: 'gray' })
))
export class LoginButton extends Component {
  render() {
    return <Button>Login</Button>
  }
}
