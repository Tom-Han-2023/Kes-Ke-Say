import { combineReducers } from 'redux'
import postReducer from './postsReducer'
import weatherReducer from './weatherReducer'
import userProfileReducer from './userProfileReducer'

export default combineReducers({
  weatherReducer,
  posts: postReducer,
  userProfile: userProfileReducer,
})
