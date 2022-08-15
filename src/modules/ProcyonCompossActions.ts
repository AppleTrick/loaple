import { createAction, createReducer } from "@reduxjs/toolkit";

export type ChangeBoolean = {
    propName : string
    showing : boolean
}

const SAMPLE_SCHEDULE = "Sample_Schedule" as const;
const ISDONE_CHANGE = "IsDone_Change" as const


// 액션정의
const Sample_Schedule = createAction(SAMPLE_SCHEDULE);
const isDoneChange = createAction<ChangeBoolean, typeof ISDONE_CHANGE>(ISDONE_CHANGE);

export { Sample_Schedule ,isDoneChange}; // 외부에서 액션 사용할수 있게 해줌

// 타입 정의
type ProcyonCompossDataType = {
    isDone: boolean
    showing ?: boolean
}

type ProcyonCompossType = {
    [anyKeyword: string] : ProcyonCompossDataType
    chaosGate: ProcyonCompossDataType
    fieldBoss: ProcyonCompossDataType
    ghostShip: ProcyonCompossDataType
    todayIsland: {
        isDone : boolean
    }    
    slimeIslane: {
        isDone : boolean
    }
    medeiaIsland: {
        isDone : boolean
    }
}

// 생성값
const initialState: ProcyonCompossType = {
    chaosGate: {
        isDone: false,
        showing :false,
    },
    fieldBoss : {
        isDone: false,
        showing :false,
    },
    ghostShip : {
        isDone: false,
        showing :false,
    },
    todayIsland : {
        isDone: false
    },
    slimeIslane: {
        isDone : false
    },
    medeiaIsland: {
        isDone : false
    }
} 

const ProcyonCompossReducer = createReducer(initialState, {
    Sample_Schedule: (state) => state,
    IsDone_Change: (state, action) => {
        state[action.payload.propName].showing = action.payload.showing;
        return state;
    }
})

export default ProcyonCompossReducer;