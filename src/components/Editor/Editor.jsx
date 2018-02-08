import React from 'react' // eslint-disable-line no-unused-vars
import {debounce} from 'lodash'

// Import Brace and the AceEditor Component
import brace from 'brace'
import AceEditor from 'react-ace'

// Import a Mode (language)
import 'brace/mode/javascript'

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/tomorrow'

import styled from 'styled-components'

export default styled(({className, filename, content, breakpoints, handleEditorChange}) => {
  return (
    // It's so sad that react requires re-render on ace editor each time
    // we change the content. I think performance is a huge hit here, since
    // virtual dom is not enough to re-init all ace editor states - ryanc
    <AceEditor className={className}
      mode='javascript'
      theme='tomorrow'
      onChange={debounce(handleEditorChange, 300)}
      name={filename}
      value={content}
      width='100%'
      height='100%'
      editorProps={{
        $blockScrolling: true
      }}
    />
  )
})`
`