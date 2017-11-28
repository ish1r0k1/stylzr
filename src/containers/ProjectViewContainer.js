import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { loadProject } from '../actions/projects'
import ColorList from '../components/ColorList'
import TypefaceList from '../components/TypefaceList'

class ProjectViewContainer extends Component {
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
        <ColorList colors={project.colors}/>
        <TypefaceList typefaces={project.typefaces}/>
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
)(ProjectViewContainer)
