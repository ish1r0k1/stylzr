import React from 'react'

const ColorItem = (props) => {
  const { color } = props

  return (
    <div>
      <div>name: {color.name}</div>
      <div>hex: {color.hex}</div>
    </div>
  )
}

export default ColorItem
