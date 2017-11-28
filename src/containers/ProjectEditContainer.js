import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { loadProject, updateProject } from '../actions/projects'
import ColorList from '../components/ColorList'
import TypefaceList from '../components/TypefaceList'

class ProjectEditContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentProject: null
    }

    this.onUpdate = this.onUpdate.bind(this)
    this.saveProject = this.saveProject.bind(this)
  }

  componentWillMount() {
    const { params: { id }, projects } = this.props

    if (!projects[id]) {
      this.props.loadProject(id)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { params: { id } } = this.props
    const currentProject = nextProps.projects[id]

    if (currentProject) {
      this.setState({ currentProject })
    }
  }

  onUpdate(field, value) {
    this.setState({
      currentProject: {
        ...this.state.currentProject,
        [field]: value
      }
    })
  }

  saveProject(evt) {
    evt.preventDefault()

    const { params: { id } } = this.props

    this.props.updateProject(id, this.state.currentProject)
  }

  render() {
    const { currentProject } = this.state

    return currentProject ? (
      <div>
        <h2>{currentProject.name}</h2>
        <ColorList
          colors={currentProject.colors}
          editable={true}
          onUpdate={this.onUpdate}
        />
        <TypefaceList
          typefaces={currentProject.typefaces}
          editable={true}
          onUpdate={this.onUpdate}
        />
        <button onClick={this.saveProject}>save</button>
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
  loadProject, updateProject
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEditContainer)
