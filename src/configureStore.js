import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

export const middelwares = [ReduxThunk];
const createStoreWithMiddelware = applyMiddleware(...middelwares)

export default createStoreWithMiddelware(rootReducer);