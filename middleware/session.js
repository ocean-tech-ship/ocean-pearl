import { SESSION_NAME } from '@/store/auth';

export default function ({ app, redirect, route }) {
  const cookie = app.$cookies.get(SESSION_NAME);

  if(cookie) {
    if(route.path === '/management/login') {
      redirect('/management')
    }
  } else if (route.path === '/management') {
      redirect('/management/login')
    }
}
