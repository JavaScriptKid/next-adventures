import React, { Component } from 'react'
import { buttonTheme } from './btn.js'
import { ButtonGroup } from './btn-group.js'
import { LoginButton } from './login-btn.js'

@buttonTheme.add({ fontSize: 20, margin: 20 })
export class Form extends Component {
  render() {
    return <div>
      woah, where are the buttons?
      <ButtonGroup/>
      <LoginButton/>
    </div>
  }
}
