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
    <div className="console description">
      <div className="toolBar">
        <button className="secondary toClear"
          onClick={handleClearConsole}>Clear</button>
      </div>
      <div className="content"></div>
    </div>
  )
}
