import reducer from '../groups'
import { setGroupsPending, setError } from '../../actions/groups'

const initialStatePending = {
  loading: false,
  error: undefined,
  data: [],
}

const initialStateError = {
  loading: false,
  error: 'errMessage',
  data: [],
}

describe('groups reducer', () => {
  it('should pend groups', () => {
    const expectedOutput = {
      loading: true,
      error: undefined,
      data: [],
    }
    expect(reducer(initialStatePending, setGroupsPending())).toEqual(
      expectedOutput
    )
  })
  it('set error', () => {
    const expectedOutput = {
      loading: false,
      error: 'errMessage',
      data: [],
    }

    expect(reducer(initialStateError, setError('errMessage'))).toEqual(
      expectedOutput
    )
  })
})
