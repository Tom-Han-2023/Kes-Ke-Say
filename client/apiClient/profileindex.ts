import request from 'superagent'

import { User, UserSnakeCase } from '../../models/user'

export function fetchUserInfo(): Promise<User> {
  return request.get('/:username').then((res) => {
   

    return res.body
  })
}