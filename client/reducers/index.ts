import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import postReducer from './postsReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
  weatherReducer,
  newsReducer,
  posts: postReducer,
})
