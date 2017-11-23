import React, { Component } from 'react'
import { Link } from 'react-router'
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
              colors: [{ name: 'black', hex: '000', opacity: 1 }],
              typefaces: [{ family: 'Raleway', weight: 400, size: 16 }]
            })
          }}>create dummy project</button>
        </div>
        <ul>
          {Object.keys(projects).map((key) => {
            return (
              <li key={key}>
                  <div>{projects[key].name}</div>
                  <ul>
                    <li>
                      <Link to={`/projects/${key}`}>view details</Link>
                    </li>
                    <li>
                      <a href="#" onClick={() => {
                        this.props.removeProject(key)
                      }}>remove</a>
                    </li>
                  </ul>
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
