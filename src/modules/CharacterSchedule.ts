import { createAction, createReducer } from "@reduxjs/toolkit";
import { SortWeeklyDailyEN } from "hooks/Schedule/Schedule";


// 타입 명칭
const ISDONE_TOGGLE = "IsDone_Toggle" as const; // true, false 바꿔주는 형태
const ADD_CHARACTER = "Add_Character" as const; // 케릭터 데이터 추가하는 형태
const ISDONE_WEEKLY = "IsDone_Weekly" as const; // 참 거짓 바꿔주는거
const UPDATE_CHARACTER = "Update_Character" as const // 케릭터 정보 업데이트
const DELETE_CHARACTER = "Delete_Character" as const // 케릭터 정보 삭제
const RESET_DAILYSCHEDULE = "Reset_DailySchedule" as const // 일간 케릭터 정보 갱신
const RESET_WEEKLYSCHEDULE = "Reset_WeeklySchedule" as const // 주간 케릭터 정보 갱신

// 주간 스케쥴 리셋
export type ResetDailySchedule = {
    RestGage: number
    plusNumbe : number
}

// 케릭터 업데이트 타입
export type UpdateCharacter = AddCharacter & DeleteCharacter

// 케릭터 삭제 타입
export type DeleteCharacter = {
    ID : number
}

// 케릭터 추가 타입정의
export type AddCharacter = {
    CharacterName: string
    Job: string
    Level : number
    ChaosDungeonRestGage: number
    GaurdianRestGage : number
}

// 한일 체크 타입
export type IsDoneType = {
    IsDone: boolean
    ItemName: string
    ID : number
}

// 주간 컨텐츠 체크 타입
export type IsDoneWeekly = {
    propsName: string
}
const AddsCharacter = createAction<AddCharacter, typeof ADD_CHARACTER>(ADD_CHARACTER);
const IsDone_Toggle = createAction<IsDoneType, typeof ISDONE_TOGGLE>(ISDONE_TOGGLE);
const IsDone_Weekly = createAction<IsDoneWeekly, typeof ISDONE_WEEKLY>(ISDONE_WEEKLY);
const Update_Character = createAction<UpdateCharacter , typeof UPDATE_CHARACTER>(UPDATE_CHARACTER);
const Delete_Character = createAction<DeleteCharacter, typeof DELETE_CHARACTER>(DELETE_CHARACTER);
const Reset_DailySchedule = createAction<ResetDailySchedule, typeof RESET_DAILYSCHEDULE>(RESET_DAILYSCHEDULE);
const Reset_WeeklySchedule = createAction(RESET_WEEKLYSCHEDULE);



// 외부에서 dispatch 시킬수있게 사용 
export { IsDone_Toggle , AddsCharacter , IsDone_Weekly , Update_Character, Delete_Character,Reset_DailySchedule,Reset_WeeklySchedule}


// 타입 정의항목
type IsDoneVisible = {
    isDone: boolean
    Visible : boolean
}

// 군단장 정보
type ComanderInformType = IsDoneVisible & {
    GateNumber : boolean
}

export type CharacterSchedule = {
    ID : number
    CharacterInform: {
        Level: number
        Job: string
        CharacterName : string
    }
    Daily: {
        [anyKeyword: string]: {
            isDone: boolean
            Visible: boolean
            RestGage?: number
        } 
        ChaosDungeon: {
            isDone: boolean
            Visible: boolean
            RestGage: number
        }
        Gaurdian: {
            isDone: boolean
            Visible: boolean
            RestGage: number
        }
        DailyEffona: {
            isDone: boolean
            Visible: boolean
        }
        GuildCheck: {
            isDone: boolean
            Visible: boolean
        }
    }
    Weekly: {
        [anyKeyword: string]: {
            isDone: boolean
            Visible : boolean
        } | ComanderInformType
        Argos: IsDoneVisible
        Valtan: ComanderInformType
        Viakiss: ComanderInformType
        Kukusaiton: ComanderInformType
        Abrelshood: ComanderInformType
        Kayangal: ComanderInformType
        Akkan : ComanderInformType
    }
}


export type ScheduleData = {
    // 원정대별 정보
    Expedition: {
        Weekly: {
            [anyKeyword: string]: IsDoneVisible
            ChallengeAbyss: IsDoneVisible
            ChallengeGuardian: IsDoneVisible
            EffonaReward: IsDoneVisible
            CrackPieceReward: IsDoneVisible
        }
    } 
    // 케릭터별 정보
    Characters: CharacterSchedule[]
} | null

// 생성 값 정의
let initialState: ScheduleData = JSON.parse(localStorage.getItem('scheduleData') || "null");
let nextID: number;

if (initialState === null) {
    initialState = {
        Expedition: {
            Weekly: {
                ChallengeAbyss: {
                    isDone : false,
                    Visible : true
                },
                EffonaReward: {
                    isDone : false,
                    Visible : true
                },
                CrackPieceReward : {
                    isDone : false,
                    Visible : true
                },
                ChallengeGuardian : {
                    isDone : false,
                    Visible : true
                }
            }
        },
        Characters: [
            
        ]
    };
    localStorage.setItem("scheduleData", JSON.stringify(initialState));
    nextID = 0;
} else {
    if (initialState.Characters.length == 0 ) {
        nextID = 0;
    } else {
        nextID = initialState.Characters[initialState.Characters.length - 1].ID;
    }
    
} 

const ScheduleReducer = createReducer(initialState, {
    Add_Character: (state, action) => {
        state.Characters.push({
            ID : nextID+1,
            CharacterInform: {
                CharacterName: action.payload.CharacterName,
                Job: action.payload.Job,
                Level: action.payload.Level
            },
            Daily: {
                ChaosDungeon: {
                    isDone: false,
                    RestGage: action.payload.ChaosDungeonRestGage,
                    Visible: true
                },
                Gaurdian: {
                    isDone: false,
                    RestGage: action.payload.GaurdianRestGage,
                    Visible: true
                },
                DailyEffona: {
                    isDone: false,
                    Visible: true
                },
                GuildCheck: {
                    isDone: false,
                    Visible: true
                }
            },
            Weekly: {
                Argos: {
                    isDone: false,
                    Visible: true,
                },
                Valtan: {
                    isDone: false,
                    GateNumber: false,
                    Visible: true
                },
                Viakiss: {
                    isDone: false,
                    GateNumber: false,
                    Visible: true
                },
                Kukusaiton: {
                    isDone: false,
                    GateNumber: false,
                    Visible: true
                },
                Abrelshood: {
                    isDone: false,
                    GateNumber: false,
                    Visible: true
                },
                Kayangal: {
                    isDone: false,
                    GateNumber: false,
                    Visible: true
                },
                Akkan : {
                    isDone: false,
                    GateNumber: false,
                    Visible: true
                }
            }

        });
        localStorage.setItem("scheduleData", JSON.stringify(state));
        nextID++;
        return state
    },
    IsDone_Toggle: (state, action) => {
        const num = state.Characters.findIndex((e) => e.ID === action.payload.ID);
        if (SortWeeklyDailyEN(action.payload.ItemName)) {
            state.Characters[num].Daily[action.payload.ItemName].isDone = action.payload.IsDone
        } else {
            state.Characters[num].Weekly[action.payload.ItemName].isDone = action.payload.IsDone
        }
        localStorage.setItem("scheduleData", JSON.stringify(state));
        return state
    },
    IsDone_Weekly: (state, action) => {
        state.Expedition.Weekly[action.payload.propsName].isDone = !state.Expedition.Weekly[action.payload.propsName].isDone
        localStorage.setItem("scheduleData", JSON.stringify(state));
        return state
    },
    Update_Character: (state, action) => {
        const data = action.payload;
        const arr = state.Characters.find((e) => e.ID === action.payload.ID);
        if (arr) {
            arr.CharacterInform.CharacterName = data.CharacterName;
            arr.CharacterInform.Level = data.Level;
            arr.CharacterInform.Job = data.Job;
            arr.Daily.ChaosDungeon.RestGage = data.ChaosDungeonRestGage;
            arr.Daily.Gaurdian.RestGage = data.GaurdianRestGage;
        } else {
            console.log("잘못된 수정입니다.");     
        }
        localStorage.setItem("scheduleData", JSON.stringify(state));
        return state;
    },
    Delete_Character: (state, action) => {
        state.Characters = state.Characters.filter((e) => e.ID !== action.payload.ID);
        localStorage.setItem("scheduleData", JSON.stringify(state));
        return state;
    },
    Reset_DailySchedule: (state, action) => {
        state.Characters.forEach((e) => {
            for (const key in e.Daily) {
                if (e.Daily[key].isDone) {
                    if (e.Daily[key].RestGage !== undefined) {
                        e.Daily[key].RestGage = Number(e.Daily[key].RestGage) - 2 
                        if (Number(e.Daily[key].RestGage) < 0) {
                            e.Daily[key].RestGage = 0;
                        }
                        e.Daily[key].RestGage = Number(e.Daily[key].RestGage) + action.payload.RestGage

                        if (Number(e.Daily[key].RestGage) > 5) {
                            e.Daily[key].RestGage = 5;
                        }
                    }
                    e.Daily[key].isDone = false;
                } else {                    
                    if (e.Daily[key].RestGage !== undefined) {
                        e.Daily[key].RestGage = Number(e.Daily[key].RestGage) + 1 + action.payload.RestGage
                
                        if (Number(e.Daily[key].RestGage) > 5) {
                            e.Daily[key].RestGage = 5;
                        }
                    }
                    e.Daily[key].isDone = false;
                }
            }
        })
        localStorage.setItem("scheduleData", JSON.stringify(state));
        return state
    },
    Reset_WeeklySchedule : (state) => {
        return state;
    }
})

export default ScheduleReducer;