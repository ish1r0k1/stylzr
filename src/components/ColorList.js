import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ColorItem from './ColorItem'

export default class ColorList extends Component {
  constructor(props) {
    super(props)

    this.addColorHandler = this.addColorHandler.bind(this)
    this.removeColorHandler = this.removeColorHandler.bind(this)
  }

  addColorHandler(evt) {
    evt.preventDefault()

    const { colors, onUpdate } = this.props

    const nameNode = ReactDOM.findDOMNode(this.refs.color_name)
    const hexNode = ReactDOM.findDOMNode(this.refs.color_hex)
    const opacity = 1

    const name = nameNode.value
    const hex = hexNode.value

    nameNode.value = ''
    hexNode.value = ''

    nameNode.focus()

    onUpdate('colors',  [{ name, hex, opacity }, ...colors])
  }

  removeColorHandler(index) {
    const { colors, onUpdate } = this.props

    colors.splice(index, 1)

    onUpdate('colors', colors)
  }

  render() {
    const { editable, colors } = this.props

    return (
      <div>
        <h3>Colors</h3>
        {editable ?
          <form onSubmit={this.addColorHandler}>
            <h3>add color</h3>
            <p>name <input type="text" ref="color_name"/></p>
            <p>hex <input type="text" ref="color_hex"/></p>
            <button>add</button>
          </form>
          : null
        }
        {colors.map((color, index) => (
          <ColorItem
            key={index}
            index={index}
            color={color}
            removeHandler={this.removeColorHandler}
          />
        ))}
      </div>
    )
  }
}
