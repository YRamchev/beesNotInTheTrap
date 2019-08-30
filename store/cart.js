const cart = localStorage.getItem('cart')
const cartCount = localStorage.getItem('cartCount')
const cartTotal = localStorage.getItem('cartTotal')

export const state = () => ({
  items: cart ? JSON.parse(cart) : [],
  itemsCount: cartCount ? parseInt(cartCount) : 0,
  total: cartTotal ? parseInt(cartTotal) : 0
})

export const getters = {
  items (state) {
    return state.items
  },

  total (state) {
    return state.total
  },

  count (state) {
    return state.itemsCount
  }
}

export const actions = {
  addToCart ({ commit }, product) {
    commit('ADD_TO_CART', product)
    commit('TOTAL')
    commit('SAVE_CART')
  },

  removeFromCart ({ commit }, product) {
    commit('REMOVE_FROM_CART', product)
    commit('TOTAL')
    commit('SAVE_CART')
  },

  removeProductFromCart ({ commit }, product) {
    commit('REMOVE_ITEM_FROM_CART', product)
    commit('TOTAL')
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
      if (state.items[index].quantity <= 1) {
        state.items.splice(index, 1)
        state.itemsCount--
      } else {
        state.items[index].quantity--
        state.itemsCount--
      }
    }
  },

  REMOVE_PRODUCT_FROM_CART (state, product) {
    const index = state.items.findIndex(item => item['.key'] === product['.key'])

    if (index >= 0) {
      state.itemsCount -= state.items[index].quantity
      state.items.splice(index, 1)
    }
  },

  TOTAL (state) {
    let total = 0
    const items = state.items

    items.forEach((item) => {
      total += item.price * item.quantity
    })

    state.total = total
  },

  SAVE_CART (state) {
    localStorage.setItem('cart', JSON.stringify(state.items))
    localStorage.setItem('cartCount', state.itemsCount)
    localStorage.setItem('cartTotal', state.total)
  }
}
