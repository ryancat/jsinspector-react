import React from 'react'

import './Editors.scss'
import { Tabs, Tab, TabPanel } from '../Tabs/Tabs'
import Editor from '../Editor/Editor'
import crossIcon from '../../icons/crossIcon.svg'

export default ({
  editors,
  selectedEditorId, 
  isAllBreakpointDisabled, 
  handleTabClick, 
  handleEditorChange}) => {

  let tabList = editors.map((editor) => {
    return (
      <Tab key={editor.id}
        isSelected={editor.id === selectedEditorId}
        handleTabClick={handleTabClick}
        tabId={editor.id}>
        {editor.label}
        <img src={crossIcon} className="icon removeIcon" alt="remove" />
      </Tab>
    )
  })

  let tabPanelList = editors.map((editor) => {
    return (
      <TabPanel key={editor.id}
        isSelected={editor.id === selectedEditorId}>
        <Editor isAllBreakpointDisabled={isAllBreakpointDisabled}
          defaultContent={editor.savedContent}
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
    <div className="editors">
      <Tabs tabList={tabList} tabPanelList={tabPanelList} />
    </div>
  )
}
