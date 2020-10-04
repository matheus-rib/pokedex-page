import titleGuard from './titleGuard'

const guards = [titleGuard]

export function register(router) {
  guards.forEach(middleware => router.afterEach(middleware))
}
