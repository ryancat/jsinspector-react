import { combineReducers } from 'redux'
import appReducer from './appReducer'
import editorsReducer from './editorsReducer'
import consoleReducer from './consoleReducer'

export default combineReducers({
  // Reducers go here
  app: appReducer,
  editors: editorsReducer,
  console: consoleReducer
})