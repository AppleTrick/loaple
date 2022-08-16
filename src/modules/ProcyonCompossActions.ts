import { createAction, createReducer } from "@reduxjs/toolkit";

export type ChangeBoolean = {
    propName : string
    bool : boolean
}

export type ClickBoolean = {
    propName : string
}


const SAMPLE_SCHEDULE = "Sample_Schedule" as const;
const ISSHOW_CHANGE = "IsShow_Change" as const
const CLICK_ISDONE = "Click_IsDone" as const


// 액션정의
const Sample_Schedule = createAction(SAMPLE_SCHEDULE);
const isSHowChange = createAction<ChangeBoolean, typeof ISSHOW_CHANGE>(ISSHOW_CHANGE);
const clickIsDone = createAction<ClickBoolean, typeof CLICK_ISDONE>(CLICK_ISDONE);

export { Sample_Schedule ,isSHowChange, clickIsDone}; // 외부에서 액션 사용할수 있게 해줌

// 타입 정의
type ProcyonCompossDataType = {
    isDone: boolean
    showing ?: boolean
}

type ProcyonCompossType = {
    [anyKeyword: string]: ProcyonCompossDataType
    chaosGate: ProcyonCompossDataType
    fieldBoss: ProcyonCompossDataType
    ghostShip: ProcyonCompossDataType
    todayIsland: {
        isDone: boolean
    }
    slimeIsland: {
        isDone: boolean
    }
    medeiaIsland: {
        isDone: boolean
    }
} | null;

// 생성값
let initialState: ProcyonCompossType = JSON.parse(localStorage.getItem('procyonComposs') || "null");

if (initialState === null) {
    initialState = {
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
        slimeIsland: {
            isDone : false
        },
        medeiaIsland: {
            isDone : false
        }
    }

    localStorage.setItem("procyonComposs", JSON.stringify(initialState));
}

const ProcyonCompossReducer = createReducer(initialState, {
    Sample_Schedule: (state) => state,
    IsShow_Change: (state, action) => {
        state[action.payload.propName].showing = action.payload.bool;
        localStorage.setItem("procyonComposs", JSON.stringify(state));
        return state;
    },
    Click_IsDone: (state, action) => {
        state[action.payload.propName].isDone = !state[action.payload.propName].isDone;
        localStorage.setItem("procyonComposs", JSON.stringify(state));
        return state
    }
})

export default ProcyonCompossReducer;