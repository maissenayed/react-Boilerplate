import { combineReducers } from "redux";

import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
//import WalletSaga from "./wallets/sagas";

import { all } from "redux-saga/effects";
import { IExampleState } from "./example/types";
import { ExampleReducer } from "./example/reducers";
import { exampleWatcherSaga } from "./example/saga";

export interface IApplicationState {
  example: IExampleState;
}

export interface IReducerAction<TPayload> extends Action<TypeConstant>, PayloadAction<TypeConstant, TPayload> {}

export const rootReducer = combineReducers<IApplicationState>({
  example: ExampleReducer,
});

export function* rootSaga() {
  yield all([exampleWatcherSaga]);
}
