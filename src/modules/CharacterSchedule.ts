
const ISDONE_TOGGLE = "IsDone_Toggle" as const; // true, false 바꿔주는 형태

const IsDone_Toggle = () => (
    {
        type: ISDONE_TOGGLE,
    }
)
export { IsDone_Toggle }


type CharacterScheduleActionTypes = | ReturnType<typeof IsDone_Toggle>

// interface AdventureIslandType {
//     Name: string,
//     Reward : string
// }

type IsDoneVisible = {
    IsDone: boolean
    Visible : boolean
}

type ComanderInformType = IsDoneVisible & {
    GateNumber : number
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

// 프로키온나침반 데이터
//  ProcyonCompossData: {
//     FeildBoss: {
//         Time: string,
//         IsDone : boolean
//     }
//     GhostShip: {
//         Time: string,
//         IsDone : boolean
//     }
//     ChaosGate: {
//         Time: string,
//         IsDone : boolean
//     }
//     AdventureIsland: {
//         IslandInform: AdventureIslandType[]
//         Time: string,
//         IsDone : boolean
//     }
// }


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
}

// 생성 값 정의
const initialState: ScheduleData = {
    Expedition: {
        Weekly: {
            ChallengeAbyss: {
                IsDone : false,
                Visible : true
            },
            EffonaReward: {
                IsDone : false,
                Visible : true
            },
            CrackPieceReward : {
                IsDone : false,
                Visible : true
            },
            ChallengeGuardian : {
                IsDone : false,
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
                    IsDone: false,
                    GateNumber: 0,
                    Visible : true
                },
                Viakiss : {
                    IsDone: false,
                    GateNumber: 0,
                    Visible : true
                },
                Kukusaiton : {
                    IsDone: false,
                    GateNumber: 0,
                    Visible : true
                },
                Abrelshood : {
                    IsDone: false,
                    GateNumber: 0,
                    Visible : true
                },
                Kayangal : {
                    IsDone: false,
                    GateNumber: 0,
                    Visible : true
                },
            }
        }
    ]
};

const ScheduleReducer = (state : ScheduleData = initialState, action : CharacterScheduleActionTypes) => {
    switch (action.type) {
        case ISDONE_TOGGLE:
            return state;
        default:
            return state;
    }
}

export default ScheduleReducer;