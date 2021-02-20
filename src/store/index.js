/** @format */

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers.js/reducer";
import { loadStateFormStore } from "../util/localStorage";

const persistedState = loadStateFormStore();

const store = createStore(reducer, persistedState, composeWithDevTools());

export default store;
