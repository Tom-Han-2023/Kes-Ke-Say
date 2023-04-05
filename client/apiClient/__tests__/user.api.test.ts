import { getUserInfo } from "../profileindex";
import * as actions from '../../actions/index'

jest.mock('../profileindex')

test('getUserInfo', async () => {
  jest.mocked(getUserInfo).mockResolvedValue()
  const dispatch = jest.fn()

  await actions.fetchUserInfo('ida')(dispatch, jest.fn())
  
})