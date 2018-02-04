import React from 'react'

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
export default ({consolePanel}) => {
  const handleClearConsole = (e) => {
    console.log('clicked')
  }

  return (
    <div className='consolePanel description'>
      <div className='consolePanelToolBar'>
        <button className='secondary toClear'
          onClick={handleClearConsole}>
          Clear
        </button>
        <input className='searchBox' />
      </div>
      <div className='consolePanelContent'></div>
    </div>
  )
}
