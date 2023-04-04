import { User, UserSnakeCase } from '../../../models/user'
import connection from '../connection'

export function getUser(username: string, db = connection): Promise<User> {
  return db<UserSnakeCase>('users')
    .where({ username })
    .select('id', 'full_name as fullName', "username", 'location', 'image')
    .first()
}
