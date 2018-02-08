import React from 'react' // eslint-disable-line no-unused-vars

import styled from 'styled-components'

export default styled(({className, name, iconStyle}) => {
  return (
    <img src={require(`../../icons/${name}.svg`)} 
      className={className} 
      alt='remove' />
  )
})`
  position: relative;
  top: 2px;
  width: 13px;
  height: 13px;
  ${props => props.iconStyle}
`