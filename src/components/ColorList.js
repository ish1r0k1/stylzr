import React from 'react'
import ColorItem from './ColorItem'

const ColorList = (props) => {
  return (
    <div>
      <h3>Colors</h3>
      {props.colors.map((color, index) => (
        <ColorItem key={index} color={color}/>
      ))}
    </div>
  )
}

export default ColorList
