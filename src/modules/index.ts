import naviactions from './NaviActions';
import ScheduleReducer from './CharacterSchedule';
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        naviactions,
        ScheduleReducer
    }
);

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>