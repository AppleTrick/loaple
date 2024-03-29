//type 정의
const NAVI_TOGGLE = "NaviToggle" as const

// 액션 정의
const NaviToggle = () => (
    {
        type: NAVI_TOGGLE,
    }
)

export { NaviToggle };

type NaviActionTypes = | ReturnType<typeof NaviToggle>;

export type NaviState= {
    open: boolean;
}

// 초기값
const initialState : NaviState = {
    open: false
};

//reducer 작성

const naviactions = (state : NaviState = initialState, action : NaviActionTypes) => {
    switch (action.type) {
        case NAVI_TOGGLE:
            return {...state , open : !(state.open)}
        default:
            return state;
    }
}

export default naviactions;