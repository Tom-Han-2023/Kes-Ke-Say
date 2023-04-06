import request from 'superagent'
import { User } from '../../models/user'

const rootUrl = '/api/v1'

export async function fetchallProfiles(): Promise<User[]> {
  const response = await request.get(rootUrl + '/users')
  return response.body.users
}
