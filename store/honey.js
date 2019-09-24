import { db } from '~/plugins/firebase.js'

export const state = () => ({
  items: {}
})

export const getters = {
  items (state) {
    return state.items
  }
}

export const actions = {
  createProduct (product) {
    return new Promise((resolve, reject) => {
      db.collection('products').doc().set(product)
        .then(() => resolve())
        .catch(err => reject(err))
    })
  },

  fetchProducts ({ commit }) {
    return new Promise((resolve, reject) => {
      db.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          commit('SET_ITEM', { resource: 'honey', id: doc.id, item: doc.data() }, { root: true })
        })
      })
        .then(() => resolve())
        .catch(err => reject(err))
    })
  },

  fetchProduct ({ context }, id) {
    return new Promise((resolve, reject) => {
      db.collection('products').doc(id).get().then((querySnapshot) => {
        resolve(querySnapshot.data())
      })
        .catch(err => reject(err))
    })
  }
}
