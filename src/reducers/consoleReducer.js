// const defaultState = [{
//   timestamp: Number,
//   logs: [{
//     editorId: String,
//     line: Number,
//     content: String,
//     type: String('ERROR', 'LOG', 'PERF', 'TEST')
//   }]
// }]

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}