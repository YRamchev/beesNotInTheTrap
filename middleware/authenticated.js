export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  if (!localStorage.getItem('user')) {
    return redirect({ name: 'index' })
  }
}
