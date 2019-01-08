# Redux-tidy

Simple helpers to organize your reducers

Provides two helper functions, makeReducer and organizeReducers
makeReducer(name: string, initialState: object, transitions: object)
organizeReducers(reducers: array<reducer>, getInitialState: boolean)

## Usage
```
//reducer
import { makeReducer } from 'redux-tidy'
const initialState = { foo: bar }
const reducer = makeReducer(NAME, initialState, {
  'setFoo': (state, action) => ({
    foo: action.payload
  })
})

//store
import { createStore, combineReducers } from 'redux'

const initialState = organizeReducers([reducer])
const reducers = combineReducers(organizeReducers([reducer], true))

createStore(
    reducers,
    initialState
  )
```
