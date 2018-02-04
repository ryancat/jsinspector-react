export const SELECT_EDITOR_BY_ID = 'SELECT_EDITOR_BY_ID'
export const EDITOR_CONTENT_CHANGED = 'EDITOR_CONTENT_CHANGED'

export const selectEditorById = (editorId) => ({
  type: SELECT_EDITOR_BY_ID,
  editorId
})

export const editorChanged = (editorId, newValue) => ({
  type: EDITOR_CONTENT_CHANGED,
  newValue,
  editorId
})