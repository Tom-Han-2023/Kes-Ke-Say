import { combineReducers } from 'redux'

import groups from './groups'
import postReducer from './postsReducer'
import weatherReducer from './weatherReducer'
import userProfileReducer from './userProfileReducer'

export default combineReducers({
  groups,
  weatherReducer,
  posts: postReducer,
  userProfile: userProfileReducer,
})
