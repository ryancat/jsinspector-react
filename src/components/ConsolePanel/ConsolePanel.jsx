import React from 'react' // eslint-disable-line no-unused-vars
import {debounce} from 'lodash'

import styled from 'styled-components'
import {color} from '../../styles/color'

import LabelText from '../LabelText/LabelText'
import InteractiveButton from '../InteractiveButton/InteractiveButton'

// {
//   timestamp: Number,
//   logs: [{
//     editorId: String,
//     line: Number,
//     content: String,
//     type: String('ERROR', 'LOG', 'PERF', 'TEST')
//   }]
// }
class ConsolePanel extends React.Component{

  constructor () {
    super()

    // The search text is inner state and used only to filter
    // the logs. The store state should not be affected by it
    this.state = {
      searchText: ''
    }

    this.handleSearchConsoleLog = this.handleSearchConsoleLog.bind(this)
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
      <div className={this.props.className}>
        <div className='consolePanelToolBar'>
          <InteractiveButton
            handleClick={this.props.handleClearConsoleLog}>
            Clear
          </InteractiveButton>
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

export default styled(ConsolePanel)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${color.border};
  border-top: none;
  padding: 5px;
  overflow: hidden;
  max-height: 50%;
  transition: height 0.3s;

  .consolePanelToolBar {
    border-bottom: 1px solid ${color.border};
    padding: 5px;
  }

  .consolePanelContent {
    flex-grow: 1;
    min-height: 50px;
    overflow: scroll;
  }
`