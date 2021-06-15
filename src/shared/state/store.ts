import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import reduxSaga from 'redux-saga'
import { takeLatest } from 'redux-saga/effects'
import * as effects from 'redux-saga/effects'

import history from '../utils/history'
import reducer from './reducer/rootReducer.reducer'
import { login, logout } from './slices/authentication.slice'

// Mocking Up a small backend ,
// by saving our redux store into the local storage to mock auth session and getting data from db

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: TStore) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}

function* saveInfoSaga() {
  try {
    yield console.log('')
  } catch (error) {
    console.error(error)
  }
}
const sagaMiddleware = reduxSaga()

const persistedStore = loadState()
export function* saga() {
  yield effects.all([takeLatest(login.type, saveInfoSaga)])
}

function* initSaga() {
  yield effects.all([effects.fork(saga)])
}

function* rootSaga() {
  yield effects.fork(initSaga)
}

export const store = configureStore({
  reducer,
  preloadedState: persistedStore,
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    routerMiddleware(history),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
})
sagaMiddleware.run(rootSaga)

export type TStore = ReturnType<typeof store.getState>

store.subscribe(() => {
  // persist your state
  saveState(store.getState())
})
