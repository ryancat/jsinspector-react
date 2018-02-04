import React from 'react'
import { connect } from 'react-redux'
import App from '../components/App/App'

const mapStateToProps = (state) => ({
  id: state.app.id,
  isBusy: state.app.isBusy,
  isConsolePanelVisible: state.app.isConsolePanelVisible
})

export default connect(
  mapStateToProps
)(App)

// The app state will be like this
/*
{
  id: String,
  editors: [{
    id: String,
    label: String,
    content: String,
    breakpoints: [{
      isDisabled: Boolean,
      line: Number(row)
    }]
  }],
  selectedEditorId: Number(editorId),
  consoleLogs: [{
    timestamp: Number,
    chunks: [{
      editorId: String,
      content: String,
      type: String('ERROR', 'LOG', 'PERF', 'TEST')
    }]
  }],
  isAllBreakpointDisabled: Boolean,
  isBusy: Boolean
}
*/