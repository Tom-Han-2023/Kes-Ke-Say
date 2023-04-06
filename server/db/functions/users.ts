import connection from '../connection'

export interface User {
  id: number
  auth0Id: string
  username: string
  fullName: string
  location: string
  image: string
}


export function getAllProfiles(db = connection): Promise<User[]> {
  return db('users').select("id", "auth0_id as auth0Id", "username", "full_name as fullName", "location", "image")
}

export function getUserLocation(id: string, db = connection) {
  return db('users').where({ auth0_id: id }).select('location')
}
