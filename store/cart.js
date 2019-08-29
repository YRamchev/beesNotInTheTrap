const cart = localStorage.getItem('cart')
const cartCount = localStorage.getItem('cartCount')

export const state = () => ({
  items: cart ? JSON.parse(cart) : [],
  itemsCount: cartCount ? parseInt(cartCount) : 0
})

export const getters = {
  items (state) {
    return state.items
  },

  total (state) {
    const items = state.items
    let total = 0
    items.forEach((item) => {
      total += item.price * item.quantity
    })

    return total
  },

  count (state) {
    return state.itemsCount
  }
}

export const actions = {
  addToCart ({ commit }, product) {
    commit('ADD_TO_CART', product)
    commit('SAVE_CART')
  },

  removeFromCart ({ commit }, product) {
    commit('REMOVE_FROM_CART', product)
    commit('SAVE_CART')
  }
}

export const mutations = {
  ADD_TO_CART (state, product) {
    const index = state.items.findIndex(item => item['.key'] === product['.key'])

    if (index < 0) {
      product.quantity = 1
      state.items.push(product)
      state.itemsCount++
    } else {
      const quantity = state.items[index].quantity + 1
      state.items[index].quantity = quantity
      state.itemsCount++
    }
  },

  REMOVE_FROM_CART (state, product) {
    const index = state.items.findIndex(item => item['.key'] === product['.key'])

    if (index >= 0) {
      state.itemsCount -= state.items[index].quantity
      state.items.splice(index, 1)
    }
  },

  SAVE_CART (state) {
    localStorage.setItem('cart', JSON.stringify(state.items))
    localStorage.setItem('cartCount', state.itemsCount)
  }
}
