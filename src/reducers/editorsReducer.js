import produce from 'immer'

import { EDITOR_CONTENT_CHANGED, CLOSE_EDITOR_TAB } from "../actions/editorsAction";

// The actual default state should be an empty array
const defaultState = [{
  id: 1,
  filename: 'File 1',
  content: 'aaa',
  breakpoints: [{
    isDisabled: false,
    line: 1
  }, {
    isDisabled: true,
    line: 2
  }]
}, {
  id: 2,
  filename: 'File 2',
  content: 'bbb',
  breakpoints: [{
    isDisabled: false,
    line: 2
  }, {
    isDisabled: true,
    line: 1
  }]
}]

export default (state = defaultState, action) => {
  switch (action.type) {
    case EDITOR_CONTENT_CHANGED:
      return produce(state, draftState => {
        let changedEditor = draftState.find(editor => editor.id === action.editorId)

        if (!changedEditor) {
          return
        }

        changedEditor.content = action.newValue
      })

    case CLOSE_EDITOR_TAB:
      return produce(state, draftState => {
        let closedEditor = draftState.find(editor => editor.id === action.editorId),
            editorIndex = draftState.indexOf(closedEditor)

        if (!closedEditor) {
          return
        }

        draftState.splice(editorIndex, 1)
      })
      
    default:
      return state
  }
}