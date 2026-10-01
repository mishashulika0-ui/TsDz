type Role = 'admin' | 'user'

interface User {
  readonly id: number
  name: string
  email: string
  role: Role
  avatar?: string
}

function getAvatar(user: User): string {
  if (user.avatar) {
    return user.avatar
  }
  return 'default.png'
}

const u: User = { id: 1, name: 'John', email: 'j@a.com', role: 'admin' }
console.log(getAvatar(u))