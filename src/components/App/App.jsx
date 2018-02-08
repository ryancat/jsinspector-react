import React from 'react' // eslint-disable-line no-unused-vars;
import styled from 'styled-components'

import EditorsContainer from '../../containers/EditorsContaienr'
import ToolBarContainer from '../../containers/ToolBarContainer'
import ConsolePanelContainer from '../../containers/ConsolePanelContainer'

export default styled(({className, id, isBusy, isConsolePanelVisible}) => {
  return (
    <div id='jsinspectorApp'
      className={className}
      style={{
        margin: '20px'
      }}>
      <EditorsContainer />
      <ToolBarContainer />
      {isConsolePanelVisible ? <ConsolePanelContainer /> : null}
    </div>
  )
})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`