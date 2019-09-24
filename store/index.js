import Vue from 'vue'

export const mutations = {
  SET_ITEM (state, { resource, item, id }) {
    console.log(state[resource])
    item['.key'] = id
    Vue.set(state[resource].items, id, item)
  }
}
