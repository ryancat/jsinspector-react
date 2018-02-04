import React from 'react'

import './SvgIcon.css'

export default ({name, iconStyle}) => {
  return (
    <img src={require(`../../icons/${name}.svg`)} 
      className='svgIcon removeIcon' 
      style={iconStyle}
      alt='remove' />
  )
}