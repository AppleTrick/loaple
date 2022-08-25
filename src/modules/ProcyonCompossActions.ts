import { createAction, createReducer } from "@reduxjs/toolkit";

export type ChangeBoolean = {
    propName : string
    bool : boolean
}

export type ClickBoolean = {
    propName : string
}


const SAMPLE_SCHEDULE = "Sample_Schedule" as const;
const ISSHOW_CHANGE = "IsShow_Change" as const;
const ISDONE_CHANGE = "IsDone_Change" as const;
const CLICK_ISDONE = "Click_IsDone" as const;
const PROCYONALLRESET = "Procyon_All_Reset" as const;

// 액션정의
const Sample_Schedule = createAction(SAMPLE_SCHEDULE);
const isSHowChange = createAction<ChangeBoolean, typeof ISSHOW_CHANGE>(ISSHOW_CHANGE);
const isDoneChange = createAction<ChangeBoolean, typeof ISDONE_CHANGE>(ISDONE_CHANGE);
const clickIsDone = createAction<ClickBoolean, typeof CLICK_ISDONE>(CLICK_ISDONE);
const procyonAllReset = createAction(PROCYONALLRESET);

export { Sample_Schedule ,isSHowChange, isDoneChange ,clickIsDone, procyonAllReset}; // 외부에서 액션 사용할수 있게 해줌

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
    // 오전 6시 지나고 프로키온 나침반 보여주는거 변경시켜줘야됨
    IsShow_Change: (state, action) => {
        state[action.payload.propName].showing = action.payload.bool;
        localStorage.setItem("procyonComposs", JSON.stringify(state));
        return state;
    },
    // 오전 6시 지나고 값들 초기화 시켜줄때 사용 
    isDoneChange: (state, action) => {
        state[action.payload.propName].isDone = action.payload.bool;
        localStorage.setItem("procyonComposs", JSON.stringify(state));
        return state;
    },
    // 클릭시 isDone = true / false
    Click_IsDone: (state, action) => {
        state[action.payload.propName].isDone = !state[action.payload.propName].isDone;
        localStorage.setItem("procyonComposs", JSON.stringify(state));
        return state
    },
    Procyon_All_Reset: (state) => {
        for (const data in state) {
            state[data].isDone = false;
        }
        return state;
    }
})

export default ProcyonCompossReducer;