import React, { Component } from 'react'
import { Button, buttonTheme } from './btn.js'
import { hover, firstChild, lastChild, merge } from 'glamor'

@buttonTheme.add(merge(
  hover({ backgroundColor: 'gray' }),
  firstChild({ borderTopLeftRadius: 10 }),
  lastChild({ borderTopRightRadius: 10 })
))
export class ButtonGroup extends Component {
  render() {
    return <div>
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
    </div>
  }
}
