import React from 'react'
// Import Brace and the AceEditor Component
import brace from 'brace'
import AceEditor from 'react-ace'

// Import a Mode (language)
import 'brace/mode/javascript'

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/tomorrow'

export default ({filename, content, breakpoints, handleEditorChange}) => {
  return (
    // It's so sad that react requires re-render on ace editor each time
    // we change the content. I think performance is a huge hit here, since
    // virtual dom is not enough to re-init all ace editor states - ryanc
    <AceEditor
      mode='javascript'
      theme='tomorrow'
      onChange={handleEditorChange}
      name={filename}
      value={content}
      editorProps={{
        $blockScrolling: true
      }}
    />
  )
}