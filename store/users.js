import Vue from 'vue'
import { auth } from '~/plugins/firebase.js'

export const state = () => ({
  items: {}
})

export const actions = {
  createUser ({ state, commit }, { id, email }) {
    return new Promise((resolve, reject) => {
      try {
        const registeredAt = Math.floor(Date.now() / 1000)
        email = email.toLowerCase()

        const user = { email, registeredAt }
        auth.database().ref('users').child(id).set(user)
          .then(() => {
            commit('setItem', { resource: 'users', id, item: user })
            resolve(state.items[id])
          })
      } catch (err) {
        reject(err)
      }
    })
  }

  // updateUser ({ commit }, user) {
  //   const updates = {
  //     email: user.email
  //   }
  //   return new Promise((resolve, reject) => {
  //     auth.database().ref('users').child(user['.key']).update(removeEmptyProps(updates))
  //       .then(() => {
  //         commit('setUser', {userId: user['.key'], user})
  //         resolve(user)
  //       })
  //   })
  // }
}

export const mutations = {
  setUser (state, { user, userId }) {
    Vue.set(state.items, userId, user)
  }
}
