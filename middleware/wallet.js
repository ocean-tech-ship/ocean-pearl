export default function ({ store, redirect, route }) {
  // Redirect to connect page if wallet is not connected
  if (!store.state.wallet.connected) {
    redirect('/manage/connect')
    return
  }

  // Do not show connect page if already connected
  if (route.path === '/manage/connect') {
    redirect('/manage')
  }
}
