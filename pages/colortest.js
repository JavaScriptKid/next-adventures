import React from 'react'
import Header from '../components/Header'
import { SketchPicker } from 'react-color'
import style from 'next/css'

let styles = style({
  font: '15px Helvetica, Arial, sans-serif',
  background: '#eee',
  padding: '100px',
  textAlign: 'center',
  transition: '100ms ease-in background',
  ':hover': {
    background: '#ccc'
  }
})
export default class ColorTest extends React.Component {
  state = {
    background: '#fff',
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  }
  render() {
    return (
      <div>
        <Header />
        <SketchPicker
          color={ this.state.background }
          onChangeComplete={ this.handleChangeComplete }
        />
        <button className={styles}>
          <p>Hello World</p>
        </button>
      </div>
    )
  }
}
