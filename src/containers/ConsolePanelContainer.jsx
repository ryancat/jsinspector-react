import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import ConsolePanel from '../components/ConsolePanel/ConsolePanel'
import { clearConsoleLog } from '../actions/consolePanelAction'

const mapStateToProps = (state) => ({
  consolePanel: state.consolePanel,
  editors: state.editors
})

const mapDispatchToProps = (dispatch) => ({

  /**
   * Handle clear the console
   * 
   * - Will dispatch clear console action
   */
  handleClearConsoleLog: () => {
    dispatch(clearConsoleLog())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsolePanel)
