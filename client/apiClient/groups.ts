// https://github.com/tohora-2023/code-from-class/blob/main/week6/tue-am/client/apis/fruits.ts

// call route api calls (talking to routes)
import request from 'superagent'
import { Group } from '../../models/group'

const rootUrl = '/api/v1'

// in Routes "/groups"
export async function getGroups(): Promise<Group[]> {
  const response = await request.get(rootUrl + '/groups')
  return response.body.groups
}

// export async function addNewFruit(newFruit: FruitCreate): Promise<Fruit[]> {
//   const response = await request.post(rootUrl + '/fruits').send(newFruit)
//   return response.body.fruits
// }
