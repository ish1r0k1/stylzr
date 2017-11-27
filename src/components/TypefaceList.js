import React from 'react'
import TypefaceItem from './TypefaceItem'

const TypefaceList = (props) => {
  return (
    <div>
      <h3>Typefaces</h3>
      {props.typefaces.map((typeface, index) => (
        <TypefaceItem key={index} typeface={typeface}/>
      ))}
    </div>
  )
}

export default TypefaceList
