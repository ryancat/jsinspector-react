import React from 'react' // eslint-disable-line no-unused-vars

import styled from 'styled-components'
import {color} from '../../styles/color'
import {fontFamily} from '../../styles/font'

import InteractiveIcon from '../InteractiveIcon/InteractiveIcon'

export const Tabs = styled(({className, tabList, tabPanelList}) => {
  return (
    <div className={className}>
      <div className='tabList'>
        {tabList}
      </div>
      <div className='tabPanelList'>
        {tabPanelList}
      </div>
    </div>
  )
})`
  .tabList {
    display: flex;
  }

  .tabPanelList {
    position: relative;
    flex-grow: 1;
  }
`

export const Tab = styled(({
  className, tabIndex, children, isSelected, tabId, 
  handleTabClick, handleCloseTab = () => {}}) => {

  return (
    <button className={className}
      onClick={e => handleTabClick(tabId)}>
      {children}
      <InteractiveIcon iconName='times' 
        handleClick={e => handleCloseTab(tabId)} />
    </button>
  )
})`
  position: relative;
  height: 30px;
  border: 1px solid ${color.border};
  ${props => props.tabIndex ? 'border-left: none;' : ''}
  border-bottom: none;
  font-family: ${fontFamily.mono};
  padding-left: 10px;
  padding-right: 5px;
  background-color: ${props => props.isSelected ? color.white : color.light};
  outline: none;

  ${InteractiveIcon} {
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover {
    ${InteractiveIcon} {
      opacity: 1;
    }
  }
`

export const TabPanel = styled(({className, children, isSelected}) => {
  const renderResult = isSelected ? (
    <div className={className}>
      {children}
    </div>
  ) : null

  return renderResult
})`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid ${color.border};
  box-sizing: border-box;
`