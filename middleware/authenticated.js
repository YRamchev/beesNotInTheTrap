export default function ({ store, redirect }) {
  console.log(store.getters['auth/isAuthenticated'])
  if (store.getters['auth/isAuthenticated']) {
    return redirect({ name: 'index' })
  }
}
