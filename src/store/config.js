import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./saga";

function logger({ getState }) {
  return (next) => (action) => {
    console.info("DISPATCH: ", action.type);
    return next(action);
  };
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  {},
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
