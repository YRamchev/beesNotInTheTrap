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

  count (state) {
    return state.itemsCount
  }
}

export const actions = {
  addToCart ({ commit }, product) {
    commit('addToCart', product)
    commit('saveCart')
  },

  removeFromCart ({ commit }, product) {
    commit('removeFromCart', product)
    commit('saveCart')
  }
}

export const mutations = {
  addToCart (state, product) {
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

  removeFromCart (state, product) {
    const index = state.items.findIndex(item => item['.key'] === product['.key'])

    if (index >= 0) {
      state.cartCount -= state.items[index].quantity
      state.cart.splice(index, 1)
    }
  },

  saveCart (state) {
    localStorage.setItem('cart', JSON.stringify(state.items))
    localStorage.setItem('cartCount', state.itemsCount)
  }
}
