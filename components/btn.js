import React from 'react'
import style from 'next/css'

export default class Button extends React.Component {
  render() {
    return (
      <button className={styles} onClick={props.onClick}>
        {props.text}
      </button>
    )
  }
}

const styles = style({
  font: '15px Helvetica, Arial, sans-serif',
  background: '#eee',
  padding: '100px',
  textAlign: 'center',
  transition: '100ms ease-in background',
  ':hover': {
    background: '#ccc'
  }
})
