import request from 'superagent'
import { News } from '../../models/news'

export function getNews(): Promise<News[]> {
  return request.get('/api/v1/externalapi/news').then((res) => {
    if (res.statusCode === 500) {
      throw Error()
    }
    return res.body
  })
}
