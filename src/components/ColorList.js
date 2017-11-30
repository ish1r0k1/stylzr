/* @flow */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ColorItem from './ColorItem'
import type { Color } from '../types'

type Props = {
  colors: Array<Color>,
  onUpdate: (string, Array<*>) => void,
  editable?: boolean
}

export default class ColorList extends Component<Props> {
  addColorHandler: Function;
  removeColorHandler: Function;

  constructor(props: Props) {
    super(props)

    this.addColorHandler = this.addColorHandler.bind(this)
    this.removeColorHandler = this.removeColorHandler.bind(this)
  }

  addColorHandler(evt: Event) {
    evt.preventDefault()

    const { colors, onUpdate } = this.props

    const nameNode = ReactDOM.findDOMNode(this.refs.color_name)
    const hexNode = ReactDOM.findDOMNode(this.refs.color_hex)
    const opacity: number = 1

    if ((nameNode && nameNode instanceof HTMLInputElement) && (hexNode && hexNode instanceof HTMLInputElement)) {
      const name: string = nameNode.value
      nameNode.value = ''
      nameNode.focus()

      const hex: string = hexNode.value
      hexNode.value = ''

      onUpdate('colors',  [{ name, hex, opacity }, ...colors])
    }
  }

  removeColorHandler(index: number) {
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
        {colors.map((color: Color, index: number) => (
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
