import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

const rootReducer = combineReducers({ client: clientReducer, product: productReducer, shoppingCart: shoppingCartReducer });
const middlewares = [thunk];

if (import.meta.env.DEV) middlewares.push(createLogger());

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
