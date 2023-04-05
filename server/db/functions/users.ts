import config from '../knexfile'
import knex from 'knex'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'

export interface User {
  id: number
  auth0Id: string
  username: string
  fullName: string
  location: string
  image: string
}

const connection = knex(config[environment])

export function getAllProfiles(db = connection): Promise<User[]> {
  return db('user').select()
}
