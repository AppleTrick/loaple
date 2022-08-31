import { createAction, createReducer } from "@reduxjs/toolkit";
import { SortWeeklyDailyEN } from "hooks/Schedule/Schedule";


// 타입 명칭
const ISDONE_TOGGLE = "IsDone_Toggle" as const; // true, false 바꿔주는 형태
const ADD_CHARACTER = "Add_Character" as const; // 케릭터 데이터 추가하는 형태


export type AddCharacter = {
    CharacterName: string
    Job: string
    Level : number
    ChaosDungeonRestGage: number
    GaurdianRestGage : number
}

export type IsDoneType = {
    IsDone: boolean
    ItemName: string
    ID : number
}

const AddsCharacter = createAction<AddCharacter, typeof ADD_CHARACTER>(ADD_CHARACTER);
const IsDone_Toggle = createAction<IsDoneType , typeof ISDONE_TOGGLE >(ISDONE_TOGGLE);



// 외부에서 dispatch 시킬수있게 사용 
export { IsDone_Toggle , AddsCharacter}


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
            {
                ID : 1,
                CharacterInform: {
                    CharacterName: "하얀눈송이아래",
                    Job: "건슬링어",
                    Level : 1591
                },
                Daily: {
                    ChaosDungeon: {
                        isDone: false,
                        RestGage: 0,
                        Visible : true
                    },
                    Gaurdian : {
                        isDone: false,
                        RestGage: 0,
                        Visible : true
                    },
                    DailyEffona: {
                        isDone: false,
                        Visible: true
                    },
                    GuildCheck: {
                        isDone: false,
                        Visible : true
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
                        Visible : true
                    },
                    Viakiss : {
                        isDone: false,
                        GateNumber: false,
                        Visible : true
                    },
                    Kukusaiton : {
                        isDone: false,
                        GateNumber: false,
                        Visible : true
                    },
                    Abrelshood : {
                        isDone: false,
                        GateNumber: false,
                        Visible : true
                    },
                    Kayangal : {
                        isDone: false,
                        GateNumber: false,
                        Visible : true
                    },
                    Akkan : {
                        isDone: false,
                        GateNumber: false,
                        Visible: true
                    }
                }
            }
        ]
    };
    localStorage.setItem("scheduleData", JSON.stringify(initialState));
    nextID = 1;
} else {
    nextID = initialState.Characters[initialState.Characters.length - 1].ID;
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
})

export default ScheduleReducer;