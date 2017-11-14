import firebase from 'firebase'
import { firebaseAuth } from '../helpers/firebase'
import { push } from 'react-router-redux'
import * as types from '../constants/actionTypes'

export async function authenticate(provider) {
  try {
    const result = await firebaseAuth.signInWithPopup(provider)
    signInSuccess(result)
    return push('/dashboard')
  } catch (err) {
    return signInFail(err)
  }
}

export async function initAuth() {
  const user = await new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      user => {
        unsubscribe()
        resolve(user)
      },
      error => reject(error)
    )
  })

  return {
    type: types.INIT_AUTH,
    payload: user
  }
}

export const signInWithGoogle = () => {
  return authenticate(new firebase.auth.GoogleAuthProvider())
}

export const signInSuccess = (result) => {
  return {
    type: types.SIGNIN_SUCCESS,
    payload: result.user
  }
}

export const signInFail = (error) => {
  return {
    type: types.SIGNIN_FAIL,
    payload: error
  }
}

export async function signOut() {
  await new Promise(done => {
    firebaseAuth.signOut()
      .then(done)
  })

  signOutSuccess()
  return push('/')
}

export const signOutSuccess = () => {
  return {
    type: types.SIGNOUT_SUCCESS,
    payload: {
      uid: null,
      displayName: null,
      email: null
    }
  }
}
