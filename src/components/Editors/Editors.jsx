import React from 'react' // eslint-disable-line no-unused-vars

import './Editors.css'
import { Tabs, Tab, TabPanel } from '../Tabs/Tabs'
import Editor from '../Editor/Editor'
import InteractiveIcon from '../InteractiveIcon/InteractiveIcon'

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
        {editor.filename}
        <InteractiveIcon iconName='times' />
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
    <div className='editors'>
      <Tabs tabList={tabList} tabPanelList={tabPanelList} />
    </div>
  )
}
