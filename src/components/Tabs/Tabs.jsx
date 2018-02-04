import React from 'react';
import './Tabs.scss';

export const Tabs = ({tabList, tabPanelList}) => {
  return (
    <div className="tabs">
      <div className="tabList">
        {tabList}
      </div>
      <div className="tabPanelList">
        {tabPanelList}
      </div>
    </div>
  )
}

export const Tab = ({children, isSelected, tabId, handleTabClick}) => {
  return (
    <button className={isSelected ? 'tab selected' : 'tab' }
      onClick={(e) => {
        e.preventDefault()
        handleTabClick(tabId)
      }}>
      {children}
    </button>
  )
}

export const TabPanel = ({children, isSelected}) => {
  return (
    <div className={isSelected ? 'tabPanel selected' : 'tabPanel' }>
      {children}
    </div>
  )
}