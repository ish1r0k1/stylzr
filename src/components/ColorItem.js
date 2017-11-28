import React from 'react'

const ColorItem = (props) => {
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
