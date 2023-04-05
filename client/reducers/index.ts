import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer'
import userProfileReducer from './userProfileReducer'

export default combineReducers({
  weatherReducer,
  userProfile: userProfileReducer,
})
