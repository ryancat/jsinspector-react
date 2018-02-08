import React from 'react' // eslint-disable-line no-unused-vars

import styled from 'styled-components'
import {color} from '../../styles/color'

export default styled(({className, children, buttonStyle, handleClick}) => {
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
  margin: 0 5px;
  outline: none;
  border: 1px solid ${color.border};

  &:hover {
    background-color: ${color.heavy};
    border-style: outset;
  }

  &:active {
    border-style: inset;
  }

  ${props => props.buttonStyle}
`