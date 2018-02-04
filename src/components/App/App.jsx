import React from 'react';
import './App.scss';

import EditorsContainer from '../../containers/EditorsContaienr'
import ConsolePanelContainer from '../../containers/ConsolePanelContainer'

const App = ({id, isBusy}) => {
  return (
    <div id="jsinspectorApp"
      className={isBusy ? 'busy' : ''}>
      <EditorsContainer></EditorsContainer>
      <ConsolePanelContainer></ConsolePanelContainer>
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

export default App;
