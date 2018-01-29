import React from 'react';
import './App.scss';

import EditorsContainer from '../../containers/EditorsContaienr'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = ({id, selectedEditor, isAllBreakpointDisabled}) => {
  return (
    <div id="jsinspectorApp">
      <EditorsContainer></EditorsContainer>
    
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
