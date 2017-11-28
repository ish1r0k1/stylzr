import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TypefaceItem from './TypefaceItem'

export default class TypefaceList extends Component {
  constructor(props) {
    super(props)

    this.addTypefaceHandler = this.addTypefaceHandler.bind(this)
    this.removeTypefaceHandler = this.removeTypefaceHandler.bind(this)
  }

  addTypefaceHandler(evt) {
    evt.preventDefault()

    const { typefaces, onUpdate } = this.props

    const familyNode = ReactDOM.findDOMNode(this.refs.typeface_family)
    const weightNode = ReactDOM.findDOMNode(this.refs.typeface_weight)
    const sizeNode = (ReactDOM.findDOMNode(this.refs.typeface_size))

    const family = familyNode.value
    const weight = weightNode.value
    const size = sizeNode.value - 0

    familyNode.value = ''
    weightNode.value = ''
    sizeNode.value = ''

    familyNode.focus()

    onUpdate('typefaces',  [{ family, weight, size }, ...typefaces])
  }

  removeTypefaceHandler(index) {
    const { typefaces, onUpdate } = this.props

    typefaces.splice(index, 1)

    onUpdate('typefaces', typefaces)
  }

  render() {
    const { editable, typefaces } = this.props

    return (
      <div>
        <h3>Typefaces</h3>
        {editable ?
          <form onSubmit={this.addTypefaceHandler}>
            <h3>add typeface</h3>
            <p>family <input type="text" ref="typeface_family"/></p>
            <p>weight <input type="text" ref="typeface_weight"/></p>
            <p>size <input type="text" ref="typeface_size"/></p>
            <button>add</button>
          </form>
          : null
        }
        {typefaces.map((typeface, index) => (
          <TypefaceItem
            key={index}
            index={index}
            typeface={typeface}
            removeHandler={this.removeTypefaceHandler}
          />
        ))}
      </div>
    )
  }
}
