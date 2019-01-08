export const makeReducer = (name, initialState, transitions = {}) => (
  state = initialState,
  action = {}
) => {
  const t = { ...transitions, name: () => name }
  const fn = t[action.type]
  if (!fn) {
    return state
  }

  return fn(state, action)
}

export const organizeReducers = (reducers, func = false) =>
  reducers.reduce(
    (state, reducer) => ({
      ...state,
      [reducer({}, { type: 'name' })]: (func && reducer) || reducer()
    }),
    {}
  )
