const cart = localStorage.getItem('cart')
const cartCount = localStorage.getItem('cartCount')

export const state = () => ({
  items: cart ? JSON.parse(cart) : [],
  itemsCount: cartCount ? parseInt(cartCount) : 0
})

export const getters = {
  cart (state) {
    return state.items
  },

  cartCount (state) {
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
    const isAdded = state.items.findIndex(item => item['.key'] === product['.key'])
    console.log(isAdded)
    if (isAdded < 0) {
      product.quantity = 1
      state.items.push(product)
      state.itemsCount++
    } else {
      console.log(state.items[isAdded].quantity)
      const quantity = state.items[isAdded].quantity + 1
      state.items[isAdded].quantity = quantity
      state.itemsCount++
    }
  },

  removeFromCart (state, painting) {
    // let index = -1;
    // state.cart.find((item, i) => {
    //   if(item._id === painting._id){
    //     index = i;
    //     return;
    //   }
    // });

    // if(index > -1) {
    //   state.cart.splice(index, 1);
    //   state.cartCount--;
    // }
  },

  saveCart (state) {
    localStorage.setItem('cart', JSON.stringify(state.items))
    localStorage.setItem('cartCount', state.itemsCount)
  }
}
