import React from 'react'
// Import Brace and the AceEditor Component
import brace from 'brace'
import AceEditor from 'react-ace'

// Import a Mode (language)
import 'brace/mode/javascript'

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/tomorrow'

export default ({filename, defaultContent, breakpoints, handleEditorChange}) => {
  return (
    <AceEditor
      mode="javascript"
      theme="tomorrow"
      onChange={handleEditorChange}
      name={filename}
      defaultValue={defaultContent}
      editorProps={{
        $blockScrolling: true
      }}
    />
  )
}