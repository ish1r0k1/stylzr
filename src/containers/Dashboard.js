import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject, removeProject, loadProjects } from '../actions/projects'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadProjects()
  }

  render() {
    const { projects } = this.props

    return (
      <div>
        <div>
          <button onClick={() => {
            this.props.createProject({
              name: 'test project',
              colors: [],
              typefaces: []
            })
          }}>create dummy project</button>
        </div>
        <ul>
          {Object.keys(projects).map((key) => {
            return (
              <li key={key}>
              <div>{projects[key].name}</div>
              <a onClick={() => {
                this.props.removeProject(key)
              }}>remove</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ projects }) => {
  return {
    projects
  }
}

const mapDispatchToProps = {
  createProject,
  removeProject,
  loadProjects
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
