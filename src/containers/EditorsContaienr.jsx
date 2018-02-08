import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Editors from '../components/Editors/Editors'
import { selectEditorById, editorChanged, closeEditorTab } from '../actions/editorsAction'

const mapStateToProps = (state) => ({
  editors: state.editors,
  selectedEditorId: state.app.selectedEditorId,
  isAllBreakpointDisabled: state.app.isAllBreakpointDisabled
})

const mapDispatchToProps = (dispatch) => ({
  /**
   * Handle the tab click event.
   * 
   * - Will dispatch clicked tab information
   */
  handleTabClick: (editorId) => {
    dispatch(selectEditorById(editorId))
  },

  /**
   * Handle editor content changes
   * 
   * - Will dispatch new value to store
   */
  handleEditorChange: (editorId, newValue) => {
    dispatch(editorChanged(editorId, newValue))
  },

  /**
   * Handle close editor tab, which will remove it from store
   * TODO: We may not delete it from store as this could be an
   * accidental operation
   * 
   * - Will dispatch close editor tab action to store
   */
  handleCloseTab: (editorId) => {
    dispatch(closeEditorTab(editorId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editors)
