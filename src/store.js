import { createStore } from "redux";
import { counterReducers } from "./services/reducers/counterReducers";

const store = createStore(counterReducers);

export default store;
