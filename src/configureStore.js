import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./core/reducers/reducer.index";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}
