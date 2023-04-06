import { combineReducers } from 'redux'
import newsReducer from './newsReducer'

import groups from './groups'
import postReducer from './postsReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
  groups,
  weatherReducer,
  newsReducer,
  posts: postReducer,
})
