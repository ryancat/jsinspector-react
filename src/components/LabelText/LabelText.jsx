import React from 'react' // eslint-disable-line no-unused-vars

export default ({children}) => {
  const style = {
    backgroundColor: '#c1c1c1',
    fontFamily: 'monospace',
    padding: '5px',
    margin: '0 5px'
  }

  return (
    <span style={style}>{children}</span>
  )
}