import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
  weatherReducer,
  newsReducer,
})
