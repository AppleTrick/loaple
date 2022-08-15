import naviactions from './NaviActions';
import ScheduleReducer from './CharacterSchedule';
import ProcyonCompossReducer from './ProcyonCompossActions';
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        naviactions,
        ScheduleReducer,
        ProcyonCompossReducer
    }
);

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>