import { db } from '~/plugins/firebase.js'

export const state = () => ({
  items: {}
})

export const actions = {
  createUser ({ context }, { id, email }) {
    return new Promise((resolve, reject) => {
      try {
        const registeredAt = Math.floor(Date.now() / 1000)
        email = email.toLowerCase()
        const userData = { id, email, registeredAt }
        db.collection('users').doc(id).set(userData)
          .then(() => {
            resolve()
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
