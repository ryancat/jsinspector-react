import React from 'react'

// Import Brace and the AceEditor Component
import brace from 'brace'
import AceEditor from 'react-ace'

// Import a Mode (language)
import 'brace/mode/javascript'

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/tomorrow'

import './Editors.scss'
import Tabs from '../Tabs/Tabs'
import crossIcon from '../../icons/crossIcon.svg'

export default ({editors}) => {
  let tabList = editors.map((editor, index) => {
    return (
      <button className="tab" key={index}>
        {editor.label}
        <img src={crossIcon} className="icon removeIcon" alt="remove" />
      </button>
    )
  })

  let tabPanelList = editors.map((editor, index) => {
    return (
      <AceEditor
        key={index}
        mode="javascript"
        theme="tomorrow"
        onChange={handleEditorChange}
        name={editor.filename}
        editorProps={{
            $blockScrolling: true
        }}
      />
    )
  })

  function handleEditorChange (e) {
    console.log('editor changed', e)
  }

  return (
    <div className="editors">
      <Tabs tabList={tabList} tabPanelList={tabPanelList} />
    </div>
    // <div id="jsinspectorApp">
    //   <div class="editors">
    //     <div class="editorTabs tabs"></div>
    //   </div>
    //   <div class="toolbox">
    //     <div class="toolbar">
    //       <div class="toobarItem toolbarBreakpoint">
    //         <button class="toolbarBreakpointBtn toDisable secondary">Disable All Breakpoints</button>
    //         <button class="toolbarBreakpointBtn toEnable secondary">Enable All Breakpoints</button>
    //       </div>
    //       <div class="toobarItem">
    //         <button class="toRemoveAll secondary">Remove All Breakpoints</button>
    //       </div>
    //     </div>
    //     <ul class="toolboxBreakpointLines"></ul>
    //   </div>
    //   <div class="description">
    //     <span>Please open your browser's dev tools, as well as active breakpoints</span>
    //   </div>
    //   <div class="mainInteraction">
    //     <button class="inspectBtn primary">Inspect</button>
    //     <button class="perfBtn primary">Perf Test (3s)</button>
    //   </div>
    //   <div class="console" class="description">
    //     <div class="toolBar">
    //       <button class="secondary toClear">Clear</button>
    //       <div class="editorTabs tabs"></div>
    //     </div>
    //     <div class="content"></div>
    //   </div>
    // </div>
  )
}
