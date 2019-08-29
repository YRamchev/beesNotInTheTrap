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
    return new Promise((resolve, reject) => {
      try {
        db.collection('products').doc().set(product)
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  },

  fetchProducts ({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        db.collection('products').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            commit('SET_ITEM', { id: doc.id, item: doc.data() })
          })
          resolve()
        })
      } catch (err) {
        reject(err)
      }
    })
  },

  fetchProduct ({ commit }, id) {
    return new Promise((resolve, reject) => {
      try {
        db.collection('products').doc(id).get().then((querySnapshot) => {
          resolve(querySnapshot.data())
        })
      } catch (err) {
        reject(err)
      }
    })
  }
}

export const mutations = {
  SET_ITEM (state, { id, item }) {
    item['.key'] = id
    Vue.set(state.items, id, item)
  }
}
