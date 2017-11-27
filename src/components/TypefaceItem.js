import React from 'react'

const TypefaceItem = (props) => {
  const { typeface } = props

  return (
    <div>
      <div>family: {typeface.family}</div>
      <div>weight: {typeface.weight}</div>
      <div>size: {typeface.size}</div>
    </div>
  )
}

export default TypefaceItem
