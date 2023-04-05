import connection from '../connection'

export function getUserLocation(id: string, db = connection) {
  return db('users').where({ auth0_id: id }).select('location')
}
