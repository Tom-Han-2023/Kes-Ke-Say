import request from 'superagent'

import { User, UserSnakeCase } from '../../models/user'

export function getUserInfo(username: string): Promise<User> {
  return request.get(`/api/v1/users/${username}`).then((res) => {
    return res.body
  })
}
