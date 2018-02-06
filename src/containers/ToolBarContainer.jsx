import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import ToolBar from '../components/ToolBar/ToolBar'
import { toggleConsolePanel, addConsoleLog } from '../actions/appAction'

const mapStateToProps = (state) => ({
  isConsolePanelVisible: state.app.isConsolePanelVisible,
  editors: state.editors
})

const mapDispatchToProps = (dispatch) => ({
  /**
   * Handle click on toggle console panel icon
   * 
   * - Will dispatch toggle action to store
   */
  handleToggleConsolePanel: (e) => {
    dispatch(toggleConsolePanel())
  },

  /**
   * Handle adding one console log
   * 
   * - Will dispatch add log action to store
   */
  handleConsoleAddLog: (editor, consoleLogType, message) => {
    dispatch(addConsoleLog(editor, consoleLogType, message + ''))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBar)
