import React from 'react' // eslint-disable-line no-unused-vars

import SvgIcon from '../SvgIcon/SvgIcon'
import styled from 'styled-components'

export default styled(({className, iconName, iconStyle, handleClick}) => {
  return (
    <span className={className}
      onClick={handleClick}
    >
      <SvgIcon name={iconName} iconStyle={iconStyle} />
    </span>
  )
})`
  position: relative;
  padding: 0 5px;
  cursor: pointer;
`