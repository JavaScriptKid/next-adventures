import React from 'react'
import { css } from 'next/css'
import { bold, space, colors } from './mainStyles'
import chroma from 'chroma-js'

const Button = ({
  ...props
}) => {
  const sx = css({
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: bold,
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    paddingTop: space[1],
    paddingBottom: space[1],
    paddingLeft: space[2],
    paddingRight: space[2],
    border: 0,
    color: colors.white,
    backgroundColor: colors.blue,
    WebkitAppearance: 'none',
    MozAppearance: 'none'
  })

  return (
    <button {...props} {...sx} />
  )
}
export default Button
