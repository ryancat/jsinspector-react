import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

export default styled(({className, placeholder, styleOverwrite, handleSearchContentChange}) => {
  return (
    <input className={className}
      onKeyUp={(evt) => handleSearchContentChange(evt.target.value)}
      placeholder={placeholder} />
  )
})`
  width: 150px;
  height: 25px;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;

  ${props => props.styleOverwrite}
`