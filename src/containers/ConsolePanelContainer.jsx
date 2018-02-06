import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import ConsolePanel from '../components/ConsolePanel/ConsolePanel'

const mapStateToProps = (state) => ({
  consolePanel: state.consolePanel,
  editors: state.editors
})

export default connect(
  mapStateToProps
)(ConsolePanel)
