/* @flow */
import React from 'react'
import type { Color } from '../types'

type Props = {
  color: Color,
  index: number,
  removeHandler: (number) => void
}

const ColorItem = (props: Props) => {
  const { color, removeHandler } = props

  return (
    <div>
      <div>name: {color.name}</div>
      <div>hex: {color.hex}</div>
      {removeHandler ?
        <a onClick={(evt) => {
          evt.preventDefault()
          removeHandler(props.index)
        }}>remove</a>
        : null
      }
    </div>
  )
}

export default ColorItem
