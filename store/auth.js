import { auth, firebase } from '~/plugins/firebase.js'

export const state = () => ({
  user: null
})

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },

  loggedInUser (state) {
    return state.user
  }
}

export const actions = {
  createUserWithEmailAndPassword ({ context }, form) {
    return new Promise((resolve, reject) => {
      try {
        auth.createUserWithEmailAndPassword(form.email, form.password)
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  },

  signInWithGoogle () {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return auth.signInWithPopup(googleProvider)
  },

  signInWithEmailAndPassword ({ context }, form) {
    auth.signInWithEmailAndPassword(form.email, form.password)
  },

  signOut ({ commit }) {
    auth.signOut()
      .then(() => {
        commit('LOGOUT')
      })
      .catch(() => {})
  }
}

export const mutations = {
  LOGOUT (state) {
    state.user = null
  },

  SET_USER (state, user) {
    state.user = user
  }
}
