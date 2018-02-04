import React from 'react'
import { connect } from 'react-redux'
import ConsolePanel from '../components/ConsolePanel/ConsolePanel'

const mapStateToProps = (state) => ({
  consolePanel: state.consolePanel
})

export default connect(
  mapStateToProps
)(ConsolePanel)
