import connection from '../connection'

import { User, UserSnakeCase } from '../../../models/user'

export function getAllProfiles(db = connection): Promise<User[]> {
  return db('users').select(
    'id',
    'auth0_id as auth0Id',
    'username',
    'full_name as fullName',
    'location',
    'image'
  )
}

export function getUserLocation(id: string, db = connection) {
  return db('users').where({ auth0_id: id }).select('location')
}

export function getUser(username: string, db = connection): Promise<User> {
  return db<UserSnakeCase>('users')
    .where({ username })
    .select('id', 'full_name as fullName', 'username', 'location', 'image')
    .first()
}
