export default function ({ store, redirect, route }) {
  // Redirect to login page if not logged in
  if (!store.state.auth.loggedIn) {
    redirect('/manage/login')
    return
  }

  // Do not show login page if already authenticated
  if (route.path === '/manage/login') {
    redirect('/manage')
  }
}
