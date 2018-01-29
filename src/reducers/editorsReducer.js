const defaultState = [{
  id: 1,
  label: 'File 1',
  content: 'aaa',
  breakpoints: [{
    isDisabled: false,
    line: 1
  }, {
    isDisabled: true,
    line: 2
  }]
}, {
  id: 2,
  label: 'File 2',
  content: 'bbb',
  breakpoints: [{
    isDisabled: false,
    line: 2
  }, {
    isDisabled: true,
    line: 1
  }]
}]

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}