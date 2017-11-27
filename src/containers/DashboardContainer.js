import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import ProjectList from '../components/ProjectList'
import { createProject, removeProject, loadProjects } from '../actions/projects'

class DashboardContainer extends Component {
  componentWillMount() {
    this.props.loadProjects()
  }

  render() {
    const { projects, removeProject } = this.props

    return (
      <div>
        <button onClick={() => {
          this.props.createProject({
            name: 'test project',
            colors: [{ name: 'black', hex: '000', opacity: 1 }],
            typefaces: [{ family: 'Raleway', weight: 400, size: 16 }]
          })
        }}>create dummy project</button>

        <hr/>

        <ProjectList
          projects={projects}
          deleteHandler={removeProject}
        />
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
)(DashboardContainer);
