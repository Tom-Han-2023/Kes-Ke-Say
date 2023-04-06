import { getGroups } from '../../apiClient/groups'
import { RootState } from '../../store'
import * as actions from '../groups'
import { SET_ERROR } from '../groups'

jest.mock('../../apiClient/groups')
const dispatch = jest.fn()
const getState = jest.fn(() => ({} as RootState))

describe('fetchGroups', () => {
  it('dispatches setError', () => {
    jest
      .mocked(getGroups)
      .mockImplementation(() => Promise.reject(new Error('couldnt sorry')))
    return actions
      .fetchGroups()(dispatch, getState)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_ERROR,
          payload: 'couldnt sorry',
        })
      })
  })
})
