import uuidv1 from 'uuid/v1'
import { SELECT_EDITOR_BY_ID } from '../actions/editorsAction';

const defaultState = {
  id: uuidv1(),
  selectedEditorId: 1,
  isAllBreakpointDisabled: false,
  isBusy: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_EDITOR_BY_ID:
      return {
        ...state,
        selectedEditorId: action.editorId
      }
    default:
      return state
  }
}