import { createStore, applyMiddleware, Store } from "redux";
import { IApplicationState, rootReducer, rootSaga } from "./store/rootReducer";
import sagaMiddleware from "./middlewares/saga";

export default function configureStore(initialState: IApplicationState): Store<IApplicationState> {
  const middleware = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, initialState, middleware);

  sagaMiddleware.run(rootSaga);

  return store;
}
