import uuidv1 from 'uuid/v1'
import produce from 'immer'
import { SELECT_EDITOR_BY_ID } from '../actions/editorsAction';
import { TOGGLE_CONSOLE_PANEL } from '../actions/appAction';

const defaultState = {
  id: uuidv1(),
  selectedEditorId: 1,
  isAllBreakpointDisabled: false,
  isBusy: false,
  isConsolePanelVisible: true
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_EDITOR_BY_ID:
      return produce(state, draftState => {
        draftState.selectedEditorId = action.editorId
      })

    case TOGGLE_CONSOLE_PANEL:
      return produce(state, draftState => {
        draftState.isConsolePanelVisible = !draftState.isConsolePanelVisible
      })
      
    default:
      return state
  }
}