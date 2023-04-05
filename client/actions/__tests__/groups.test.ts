// testing our thunk action FETCHGROUPS
import { getGroups } from '../../apiClient/groups'
import { RootState } from '../../store'
import * as actions from '../groups'
import { SET_ERROR } from '../groups'
// actions.fetchGroups

jest.mock('../../apiClient/groups')
const dispatch = jest.fn() // mock dispatch
const getState = jest.fn(() => ({} as RootState))

describe('fetchGroups', () => {
  it('dispatches setError', () => {
    // mocking our api call and rejects the promise
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
