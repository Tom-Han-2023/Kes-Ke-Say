import connection from '../connection'

export function getUserLocation(id: string, db = connection) {
  return db('users').where({ auth0_id: id }).select('location')
}
import { User, UserSnakeCase } from '../../../models/user'


export function getUser(username: string, db = connection): Promise<User> {
  return db<UserSnakeCase>('users')
    .where({ username })
    .select('id', 'full_name as fullName', 'username', 'location', 'image')
    .first()
}
