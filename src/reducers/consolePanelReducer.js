import produce from 'immer'

// const defaultState = {
//   logs: [{
//     timestamp: Number,
//     editorId: String,
//     line: Number,
//     content: String,
//     type: String('LOG', 'ERROR', 'BREAKPOINT', 'EVAL_RESULT', 'PERF', 'TEST')
//   }]
// }

import consoleLogType from '../enums/consoleLogType'
import { ADD_CONSOLE_LOG } from '../actions/appAction';
import { CLEAR_CONSOLE_LOG } from '../actions/consolePanelAction';

const defaultState = {
  logs: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CONSOLE_LOG:
      return produce(state, draftState => {
        draftState.logs.push({
          timestamp: Date.now(),
          editorId: action.editor.id,
          content: action.message,
          type: action.consoleLogType
        })
      })

    case CLEAR_CONSOLE_LOG:
      return produce(state, draftState => {
        draftState.logs = []
      })

    default:
      return state
  }
}