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

    default:
      return state
  }
}