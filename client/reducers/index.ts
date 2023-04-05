import { combineReducers } from 'redux'
import postReducer from './postsReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
  weatherReducer,
  posts: postReducer,
})
