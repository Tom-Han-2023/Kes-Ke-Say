/// db crud function
import knex from 'knex'
import config from '../knexfile'
import { Group } from '../../../models/group'
const connection = knex(config.development)

export async function getAllGroups(db = connection): Promise<Group[]> {
  return await db('groups').select()
}
