import React from 'react'
import Button from './btn'

let count = 0

export default class Counter extends React.Component {
  add () {
    count += 1
    this.forceUpdate()
  }

  render () {
    return (
      <div>
        <p>Count is: {count}</p>
        <Button onClick={() => this.add()}>Add</Button>
      </div>
    )
  }
}
