import React from 'react' // eslint-disable-line no-unused-vars

import styled from 'styled-components'

import { Tabs, Tab, TabPanel } from '../Tabs/Tabs'
import Editor from '../Editor/Editor'

export default styled(({
  className,
  editors,
  selectedEditorId, 
  isAllBreakpointDisabled, 
  handleTabClick, 
  handleEditorChange,
  handleCloseTab}) => {

  let tabList = editors.map((editor, editorIndex) => {

    return (
      <Tab key={editor.id}
        isSelected={editor.id === selectedEditorId}
        handleTabClick={handleTabClick}
        handleCloseTab={handleCloseTab}
        tabId={editor.id}
        tabIndex={editorIndex}>
        {editor.filename}
      </Tab>
    )
  })

  let tabPanelList = editors.map((editor) => {
    return (
      <TabPanel key={editor.id}
        isSelected={editor.id === selectedEditorId}>
        <Editor isAllBreakpointDisabled={isAllBreakpointDisabled}
          content={editor.content}
          breakpoints={editor.breakpoints}
          filename={editor.filename}
          handleEditorChange={(newValue) => {
            handleEditorChange(editor.id, newValue)
          }}>
        </Editor>
      </TabPanel>
    )
  })

  return (
    <Tabs className={className} 
      tabList={tabList} 
      tabPanelList={tabPanelList} />
  )
})`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`