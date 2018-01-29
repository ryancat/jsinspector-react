## jsinspector-react

A static page to help inspect javascript with browser's dev tools, built with react and redux

## State
```javascript
{
  id: String,
  editors: [{
    id: String,
    filename: String,
    content: String,
    breakpoints: [{
      isDisabled: Boolean,
      line: Number(row)
    }]
  }],
  selectedEditor: Number(editorId),
  consoleLogs: [{
    timestamp: Number,
    chunks: [{
      editorId: String,
      content: String,
      type: String('ERROR', 'LOG', 'PERF', 'TEST')
    }]
  }],
  isAllBreakpointDisabled: Boolean
}
```

## Todo
- Add library support
- Add multiple file support
- Add tests
- Add performance results