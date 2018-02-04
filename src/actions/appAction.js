export const TOGGLE_CONSOLE_PANEL = 'TOGGLE_CONSOLE_PANEL'
export const ADD_CONSOLE_LOG = 'ADD_CONSOLE_LOG'

export const toggleConsolePanel = () => ({
  type: TOGGLE_CONSOLE_PANEL
})

export const addConsoleLog = (editor, consoleLogType, message) => ({
  type: ADD_CONSOLE_LOG,
  editor,
  consoleLogType,
  message
})