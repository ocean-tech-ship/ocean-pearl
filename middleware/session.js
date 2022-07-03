import { SESSION_NAME } from '@/store/auth';

export default function ({ app, redirect, route }) {
  const cookie = app.$cookies.get(SESSION_NAME);

  if (!cookie && route.path.startsWith('/manage')) {
    redirect('/');
  }
}
