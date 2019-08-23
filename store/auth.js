import { auth } from '~/plugins/firebase.js'

export const state = () => ({
  user: null
})

export const actions = {
  createUserWithEmailAndPassword ({ context }, form) {
    auth.createUserWithEmailAndPassword(form.email, form.password)
      .then((cred) => {
        console.log(cred)
      })
      .catch((err) => {
        console.error(err)
      })
  },

  signInWithEmailAndPassword ({ context }, form) {
    auth.signInWithEmailAndPassword(form.email, form.password)
      .then((cred) => {
        console.log(cred)
      })
      .catch((err) => {
        console.error(err)
      })
  },

  signOut ({ commit }) {
    auth.signOut()
      .then(() => {
        commit('LOGOUT')
      })
      .catch((err) => {
        console.error(err)
      })
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
