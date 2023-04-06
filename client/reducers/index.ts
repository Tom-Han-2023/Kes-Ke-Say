import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import groups from './groups'
import users from './users'
import postReducer from './postsReducer'
import weatherReducer from './weatherReducer'
import userProfileReducer from './userProfileReducer'

export default combineReducers({
  groups,
  weather: weatherReducer,
  news: newsReducer,
  users,
  posts: postReducer,
  userProfile: userProfileReducer,
})
