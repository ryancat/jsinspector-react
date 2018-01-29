import React from 'react'
import { connect } from 'react-redux'
import Editors from '../components/Editors/Editors'

const mapStateToProps = (state) => ({
  editors: state.editors
})

export default connect(
  mapStateToProps
)(Editors)
