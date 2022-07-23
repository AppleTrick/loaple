// 액션 타입 정의
const ISDONE_TOGGLE = "IsDone_Toggle" as const; // true, false 바꿔주는 형태

const IsDone_Toggle = () => (
    {
        type: ISDONE_TOGGLE,
    }
)
export { IsDone_Toggle }

type CharacterScheduleActionTypes = | ReturnType<typeof IsDone_Toggle>

// 초기값 타입 정의


// 생성 값 정의
const initialState = [];