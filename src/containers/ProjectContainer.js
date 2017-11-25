import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { loadProject } from '../actions/projects'

class ProjectContainer extends Component {
  componentWillMount() {
    const { params: { id }, projects } = this.props

    if (!projects[id]) {
      this.props.loadProject(id)
    }
  }

  render() {
    const { params: { id }, projects } = this.props
    const project = projects[id]

    return project ? (
      <div>
        <h2>{project.name}</h2>
        <div>
          <h3>Colors</h3>
          <ul>
            {project.colors.map((color, index) => {
              return (
                <li key={index}>
                  <div>name: {color.name}</div>
                  <div>hex: #{color.hex}</div>
                  <div>opacity: {color.opacity}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h3>Typefaces</h3>
          <ul>
            {project.typefaces.map((typeface, index) => {
              return (
                <li key={index}>
                  <div>family: {typeface.family}</div>
                  <div>weight: {typeface.weight}</div>
                  <div>size: {typeface.size}px</div>
                </li>
              )
            })}
          </ul>
        </div>
        <Link to="/dashboard">Back to list</Link>
      </div>
    ) : (
      <div>loading</div>
    )
  }
}

const mapStateToProps = ({ projects }) => {
  return {
    projects
  }
}

const mapDispatchToProps = {
  loadProject
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)
