import React from 'react' // eslint-disable-line no-unused-vars

import styled from 'styled-components'
import {color} from '../../styles/color'

import InteractiveIcon from '../InteractiveIcon/InteractiveIcon'
import InteractiveButton from '../InteractiveButton/InteractiveButton'
import consoleLogType from '../../enums/consoleLogType'

export default styled(({
  className,
  isConsolePanelVisible, 
  editors, 
  handleToggleConsolePanel,
  handleConsoleAddLog
}) => {
  const handleInspectBtnClick = e => {
    // Show console if its hidden
    if (!isConsolePanelVisible) {
      handleToggleConsolePanel()
    }
    
    // Evaluate all files and output the results
    editors.forEach(editor => {
      // hijack console.log
      // We need to avoid possible console.log call from 3rd party library...
      window.jsinspectorConsole = {}
      window.jsinspectorConsole.log = (...args) => {
        handleConsoleAddLog(editor, consoleLogType.LOG, ...args)
        console.log(args)
      }

      let lineContents = editor.content
        .replace(/console\.log/g, 'jsinspectorConsole.log')
        .split('\n')
      
      // Add breakpoints
      // editor.aceEditor.session.getBreakpoints().forEach((breakPointClass, row) => {
      //   if (breakPointClass.indexOf('disabled') === -1) {
      //     lineContents[row] = `debugger;${lineContents[row]}`
      //   }
      // });

      const evalContent = `/* ${editor.filename} */\n\n${lineContents.map((l, r) => '/* ' + (r + 1) + ' */ ' + l).join('\n')}`
      // It's ok to use eval as this will be a static page
      try {
        handleConsoleAddLog(editor, consoleLogType.EVAL_RESULT, eval(evalContent))
      } catch (e) {
        handleConsoleAddLog(editor, consoleLogType.ERROR, e.message)
      }
    })
  }
  
  return (
    <div className={className}>
      {/* The toggle console panel visiblility icon */}
      {isConsolePanelVisible ? (
        <InteractiveIcon iconName='chevron-circle-down' 
          handleClick={handleToggleConsolePanel}
        />
      ) : (
        <InteractiveIcon iconName='chevron-circle-right' 
          handleClick={handleToggleConsolePanel}
        />
      )}
      
      <InteractiveButton 
        handleClick={handleInspectBtnClick}>
        Inspect
      </InteractiveButton>
    </div>
  )
})`
  border: 1px solid ${color.border};
  border-top: none;
  padding: 5px;
`