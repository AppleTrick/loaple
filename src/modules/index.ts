import naviactions from './NaviActions';
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        naviactions
    }
);

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>