import Vue from 'vue'
import { db } from '~/plugins/firebase.js'

export const state = () => ({
  items: []
})

export const actions = {
  createHoney ({ context }, honey) {
    db.collection('honey').doc().set(honey)
  },

  fetchHoney ({ commit }) {
    return new Promise((resolve, reject) => {
      db.collection('honey').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data())
          commit('setItem', { id: doc.id, item: doc.data() })
        })
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
