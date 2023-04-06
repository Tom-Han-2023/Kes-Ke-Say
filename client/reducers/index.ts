import { combineReducers } from 'redux'
import users from './users'
import postReducer from './postsReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
  users,
  weatherReducer,
  posts: postReducer,
})
