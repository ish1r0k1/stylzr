import React from 'react'

const TypefaceItem = (props) => {
  const { typeface, removeHandler } = props

  return (
    <div>
      <div>family: {typeface.family}</div>
      <div>weight: {typeface.weight}</div>
      <div>size: {typeface.size}</div>
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

export default TypefaceItem
