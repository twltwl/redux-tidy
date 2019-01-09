# Redux-tidy

Simple helpers to organize your reducers

Provides two helper functions, makeReducer and organizeReducers
makeReducer(name: string, initialState: object, transitions: object)
organizeReducers(reducers: array<reducer>, getInitialState: boolean)

## Usage
```javascript
//reducer
import { makeReducer } from 'redux-tidy'

const NAME = 'fooReducer'
const SET = `${NAME}/set`

const initialState = { foo: bar }
const reducer = makeReducer(NAME, initialState, {
  [SET]: (state, action) => ({
    foo: action.payload
  })
})

//store
import { createStore, combineReducers } from 'redux'
import { organizeReducers } from 'redux-tidy'

const initialState = organizeReducers([reducer])
const reducers = combineReducers(organizeReducers([reducer], true))

createStore(
    reducers,
    initialState
  )
```
