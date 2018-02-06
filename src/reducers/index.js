import { combineReducers } from 'redux'
import appReducer from './appReducer'
import editorsReducer from './editorsReducer'
import consolePanelReducer from './consolePanelReducer'

export default combineReducers({
  // Reducers go here
  app: appReducer,
  editors: editorsReducer,
  consolePanel: consolePanelReducer
})