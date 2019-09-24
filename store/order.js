import { db, firebase } from '~/plugins/firebase.js'
const orderData = localStorage.getItem('orderData')

export const state = () => ({
  data: orderData ? JSON.parse(orderData) : null,
  items: null
})

export const getters = {
  data (state) {
    return state.data
  }
}

export const actions = {
  processOrder ({ commit }, { order, userId }) {
    const orderData = order
    let notSoUniqueId = new Date().valueOf().toString()
    notSoUniqueId = notSoUniqueId.slice(7, notSoUniqueId.length)
    orderData.id = Number(notSoUniqueId)
    orderData.status = 1
    orderData.userId = userId

    commit('SET_ORDER_DATA', orderData)
  },

  async createOrder ({ state, commit }) {
    await db.collection('orders').doc().set(state.data)
      .catch((err) => {
        return err
      })

    await db.collection('users').doc(state.data.userId).update({
      orders: firebase.firestore.FieldValue.arrayUnion(state.data)
    })
      .then(() => {
        commit('CLEAR_ORDER_DATA')
      })
      .catch((err) => {
        return err
      })
  },

  async fetchUserOrders ({ commit }, userId) {
    await db.collection('users').doc(userId).get()
      .then((doc) => {
        commit('SET_ITEM', { resource: 'order', id: doc.id, item: doc.data().orders }, { root: true })
      })
      .catch(err => err)
  }
}

export const mutations = {
  SET_ORDER_DATA (state, orderData) {
    localStorage.setItem('orderData', JSON.stringify(orderData))
    state.data = orderData
  },

  CLEAR_ORDER_DATA (state) {
    localStorage.setItem('orderData', null)
    state.data = null
  }
}
