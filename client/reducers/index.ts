import { combineReducers } from 'redux'
import users from './users'
import postReducer from './postsReducer'
import weatherReducer from './weatherReducer'
import groups from './groups'
import userProfileReducer from './userProfileReducer'

export default combineReducers({
  users,
  weatherReducer,
  posts: postReducer,
  groups,
  userProfile: userProfileReducer,
})
