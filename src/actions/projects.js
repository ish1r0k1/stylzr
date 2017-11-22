import { firebaseAuth, firebaseDb } from '../helpers/firebase'
import * as types from '../constants/actionTypes'

export const createProject = async (value) => {
  const { uid } = firebaseAuth.currentUser

  try {
    let newProject = await new Promise((resolve, reject) => {
      return firebaseDb.ref(`/projects/${uid}`)
        .push(value).then(resolve, reject)
    })

    return createProjectSuccess({ [newProject.key]: value })
  } catch(err) {
    return createProjectError(err)
  }
}

export const createProjectSuccess = (newProject) => {
  return {
    type: types.CREATE_PROJECT_SUCCESS,
    payload: newProject
  }
}

export const createProjectError = () => {
  return {
    type: types.CREATE_PROJECT_ERROR
  }
}

export const removeProject = async (key) => {
  const { uid } = firebaseAuth.currentUser

  try {
    await new Promise((resolve, reject) => {
      firebaseDb.ref(`/projects/${uid}/${key}`)
        .remove().then(resolve, reject)
    })
    return removeProjectSuccess(key)
  } catch(err) {
    return removeProjectError(err)
  }
}

export const removeProjectSuccess = (key) => {
  return {
    type: types.REMOVE_PROJECT_SUCCESS,
    payload: { key }
  }
}

export const removeProjectError = () => {
  return {
    type: types.REMOVE_PROJECT_ERROR
  }
}

export const updateProject = async () => {

}

export const updateProjectSuccess = () => {
  return {
    type: types.UPDATE_PROJECT_SUCCESS
  }
}

export const updateProjectError = () => {
  return {
    type: types.UPDATE_PROJECT_ERROR
  }
}

export const loadProjects = async () => {
  const { uid } = firebaseAuth.currentUser

  const snapshot = await new Promise(done => {
    firebaseDb.ref(`/projects`)
      .once('value').then(done)
  })

  const result = snapshot.val() ? snapshot.val()[uid] : []

  return loadProjectsSuccess(result)
}

export const loadProjectsSuccess = (result) => {
  return {
    type: types.LOAD_PROJECTS_SUCCESS,
    payload: result
  }
}

export const loadProjectsError = () => {
  return {
    type: types.LOAD_PROJECTS_ERROR
  }
}
