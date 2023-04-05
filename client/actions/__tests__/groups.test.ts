// testing our thunk action FETCHGROUPS
import { getGroups } from '../../apiClient/groups'
import * as actions from '../groups'

jest.mock('../../apiClient/groups')
