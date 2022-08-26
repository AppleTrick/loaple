import { createAction, createReducer } from "@reduxjs/toolkit";


// 타입 명칭
const ISDONE_TOGGLE = "IsDone_Toggle" as const; // true, false 바꿔주는 형태
const ADD_CHARACTER = "Add_Character" as const; // 케릭터 데이터 추가하는 형태

const IsDone_Toggle = createAction(ISDONE_TOGGLE);

export type AddCharacter = {
    CharacterName: string
    Job: string
    Level : number
    ChaosDungeonRestGage: number
    GaurdianRestGage : number
}

const AddsCharacter = createAction<AddCharacter, typeof ADD_CHARACTER>(ADD_CHARACTER);


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
    CharacterInform: {
        Level: number
        Job: string
        CharacterName : string
    }
    Daily: {
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
        Argos: {
            isDone: boolean
            Visible : boolean
        }
        Valtan: ComanderInformType
        Viakiss: ComanderInformType
        Kukusaiton: ComanderInformType
        Abrelshood: ComanderInformType
        Kayangal: ComanderInformType
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
                }
            }
        ]
    };
    localStorage.setItem("scheduleData", JSON.stringify(initialState));
} 

const ScheduleReducer = createReducer(initialState, {
    IsDone_Toggle: (state) => state,
    Add_Character: (state, action) => {
        state.Characters.push({
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
            }

        });
        localStorage.setItem("scheduleData", JSON.stringify(state));
        return state
    },
})

export default ScheduleReducer;