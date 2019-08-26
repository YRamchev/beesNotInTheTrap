import Vue from 'vue'
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
  createProduct ({ context }, product) {
    db.collection('products').doc().set(product)
  },

  fetchProducts ({ commit }) {
    return new Promise((resolve) => {
      db.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          commit('setItem', { id: doc.id, item: doc.data() })
        })
        resolve()
      })
    })
  }
}

export const mutations = {
  setItem (state, { id, item }) {
    item['.key'] = id
    Vue.set(state.items, id, item)
  }
}
