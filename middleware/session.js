import { SESSION_COOKIE } from '@/store/auth'

export default function ({ app, redirect, route }) {
  const cookie = app.$cookies.get(SESSION_COOKIE)

  // Redirect to login page if not logged in
  if (!cookie && route.path !== '/manage/login') {
    redirect('/manage/login')
    return
  }

  // Do not show login page if already authenticated
  if (!!cookie && route.path === '/manage/login') {
    redirect('/manage')
  }
}
