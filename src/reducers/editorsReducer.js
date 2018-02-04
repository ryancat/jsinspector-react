import { EDITOR_CONTENT_CHANGED } from "../actions/editorsAction";

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
      let editorState = state.find(editor => editor.id === action.editorId),
          editorIndex = state.indexOf(editorState),
          newEditorState = {
            ...editorState,
            content: action.newValue
          },
          newState = state.slice()

      newState.splice(editorIndex, 1, newEditorState)
      return newState
    default:
      return state
  }
}