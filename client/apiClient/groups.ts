import request from 'superagent'
import { Group } from '../../models/group'

const rootUrl = '/api/v1'

export async function getGroups(): Promise<Group[]> {
  const response = await request.get(rootUrl + '/groups')
  return response.body.groups
}
