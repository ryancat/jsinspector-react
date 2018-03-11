import React from 'react' // eslint-disable-line no-unused-vars

import styled from 'styled-components'
import {color} from '../../styles/color'

export default styled(({className, children, styleOverwrite, handleClick}) => {
  return (
    <button className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  )
})`
  height: 25px;
  background-color: ${color.light};
  outline: none;
  border: 1px solid ${color.border};
  cursor: pointer;

  &:hover {
    background-color: ${color.heavy};
    border-style: outset;
  }

  &:active {
    border-style: inset;
  }

  ${props => props.styleOverwrite}
`