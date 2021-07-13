export default function ({ store, redirect }) {
  // Redirect if wallet is not connected
  if (!store.state.wallet.connected) {
    redirect('/manage/connect')
  }
}
