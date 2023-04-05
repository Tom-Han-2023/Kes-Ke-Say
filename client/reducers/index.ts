import { combineReducers } from 'redux'

import groups from './groups'
import postReducer from './postsReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
  groups,
  weatherReducer,
  posts: postReducer,
})
