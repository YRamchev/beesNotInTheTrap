import { auth, firebase, db } from '~/plugins/firebase.js'
const userData = localStorage.getItem('user')

export const state = () => ({
  user: userData ? JSON.parse(userData) : null,
  unsubscribeAuthObserver: null
})

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },

  userId (state) {
    return state.user.id
  },

  loggedInUser (state) {
    return state.user
  }
}

export const actions = {
  initAuthentication ({ commit }) {
    return new Promise((resolve, reject) => {
      // unsubscribe observer if already listening
      if (state.unsubscribeAuthObserver) {
        state.unsubscribeAuthObserver()
      }

      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          const userData = {
            id: user.uid,
            email: user.email,
            name: user.displayName
          }
          commit('SET_USER', userData)
        } else {
          resolve(null)
        }
      })

      commit('SET_UNSUBSCRIBE_AUTH_OBSERVER', unsubscribe)
    })
  },

  createUserWithEmailAndPassword ({ dispatch }, form) {
    return new Promise((resolve, reject) => {
      auth.createUserWithEmailAndPassword(form.email, form.password)
        .then((data) => {
          return dispatch('users/createUser', { id: data.user.uid, email: form.email }, { root: true })
        })
        .then(() => {
          resolve()
        })
        .catch((err) => {
          reject(err.message)
        })
    })
  },

  signInWithGoogle ({ dispatch }) {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return new Promise((resolve, reject) => {
      auth.signInWithPopup(googleProvider)
        .then((data) => {
          const user = data.user
          db.collection('users').doc(user.uid).get()
            .then((doc) => {
              if (!doc.exists) {
                return dispatch('users/createUser', { id: user.uid, email: user.email }, { root: true })
              }
            })
            .then(() => {
              resolve()
            })
        })
        .catch((err) => {
          reject(err.message)
        })
    })
  },

  signInWithEmailAndPassword ({ context }, form) {
    auth.signInWithEmailAndPassword(form.email, form.password)
  },

  signOut ({ commit }) {
    auth.signOut()
      .then(() => {
        commit('SIGNOUT')
      })
      .catch(() => {})
  }
}

export const mutations = {
  SIGNOUT (state) {
    state.user = null
    localStorage.removeItem('user')
  },

  SET_USER (state, user) {
    state.user = user
    localStorage.setItem('user', JSON.stringify(state.user))
  },

  SET_UNSUBSCRIBE_AUTH_OBSERVER (state, unsubscribe) {
    state.unsubscribeAuthObserver = unsubscribe
  }
}
