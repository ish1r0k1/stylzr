import React from 'react'
import { Link } from 'react-router'

const ProjectList = (props) => {
  const { projects, deleteHandler } = props
  const listItems = Object.keys(projects).map(key => (
    <li key={key}>
      <h3>{projects[key].name}</h3>
      <ul>
        <li><Link to={`/projects/${key}`}>view details</Link></li>
        <li><Link to={`/projects/${key}/edit`}>edit</Link></li>
        <li><a onClick={() => deleteHandler(key)}>delete</a></li>
      </ul>
    </li>
  ))

  return (
    <div>
      <h2>Projects</h2>
      <ul>{listItems}</ul>
    </div>
  )
}

export default ProjectList
