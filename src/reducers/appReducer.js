import uuidv1 from 'uuid/v1'


const defaultState = {
  id: uuidv1(),
  selectedEditor: null,
  isAllBreakpointDisabled: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}