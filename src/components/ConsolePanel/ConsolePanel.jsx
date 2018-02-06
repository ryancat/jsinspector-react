import React from 'react' // eslint-disable-line no-unused-vars
import {debounce} from 'lodash'

import LabelText from '../LabelText/LabelText'
import './ConsolePanel.scss'

// {
//   timestamp: Number,
//   logs: [{
//     editorId: String,
//     line: Number,
//     content: String,
//     type: String('ERROR', 'LOG', 'PERF', 'TEST')
//   }]
// }
export default class ConsolePanel extends React.Component{

  constructor () {
    super()

    // The search text is inner state and used only to filter
    // the logs. The store state should not be affected by it
    this.state = {
      searchText: ''
    }

    this.handleClearConsoleLog = this.handleClearConsoleLog.bind(this)
    this.handleSearchConsoleLog = this.handleSearchConsoleLog.bind(this)
  }

  handleClearConsoleLog (e) {
    console.log('clicked')
  }

  handleSearchConsoleLog () {
    this.setState({
      searchText: this.refs.consoleLogSearch.value
    })
  }
  
  render () {
    const {consolePanel, editors} = this.props,
          logs = consolePanel.logs,
          logElements = logs.filter(log => {
            const editor = editors.find(editor => editor.id === log.editorId)
            return editor.filename.toUpperCase().indexOf(this.state.searchText.toUpperCase()) >= 0 
            || log.content.toUpperCase().indexOf(this.state.searchText.toUpperCase()) >= 0
          }).map((log, index) => {
            const editor = editors.find(editor => editor.id === log.editorId)
  
            return (
              <div className='consolePanelLog' key={index}>
                <LabelText>{editor.filename}</LabelText>
                <span>{log.content}</span>
              </div>
            )
          })
  
    return (
      <div className='consolePanel description'>
        <div className='consolePanelToolBar'>
          <button className='secondary toClear'
            onClick={this.handleClearConsoleLog}>
            Clear
          </button>
          <input className='searchBox' 
            onKeyUp={debounce(this.handleSearchConsoleLog, 300)}
            ref='consoleLogSearch'
            placeholder='Search Log...' />
        </div>
        <div className='consolePanelContent'>
          {logElements}
        </div>
      </div>
    )
  }
} 
