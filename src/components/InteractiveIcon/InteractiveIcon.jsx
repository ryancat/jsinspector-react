import React from 'react'

import SvgIcon from '../SvgIcon/SvgIcon'
import './InteractiveIcon.css'

export default ({iconName, iconStyle, handleClick}) => {
  return (
    <span className='interactiveIcon'
      onClick={handleClick}
    >
      <SvgIcon name={iconName} iconStyle={iconStyle} />
    </span>
  )
}