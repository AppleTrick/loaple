import { isDoneChange, isSHowChange, procyonAllReset } from "modules/ProcyonCompossActions";
import { useDispatch } from "react-redux";

export const prcyonShowDispatch = (a: boolean, b:boolean, c: boolean ) => {
    const dispatch = useDispatch();   
    dispatch(isSHowChange({
        bool: a,
        propName : "chaosGate"
    }))
    dispatch(isSHowChange({
        bool: b,
        propName : "fieldBoss"
    }))
    dispatch(isSHowChange({
        bool: c,
        propName : "ghostShip"
    }))
}

export const procyonIsDoneChangeDispatch = (a?:boolean , b?:boolean, c?:boolean) => {
    const dispatch = useDispatch(); 
    if (a !== undefined) {
        dispatch(isDoneChange({
            bool: a,
            propName : "chaosGate"
        }))
    }
    if (b !== undefined) {
        dispatch(isDoneChange({
            bool: b,
            propName : "fieldBoss"
        }))
    }
    if (c !== undefined) {
        dispatch(isDoneChange({
            bool: c,
            propName : "todayIsland"
        }))
    }
}

// 주간 데이터 전부 리셋
// 주간 프로키온 , 일정 초기화 알고리즘
export const weeklyReset = () => {

    // 프로키온 데이터 리셋
    const dispatch = useDispatch();   
    dispatch(procyonAllReset());
}
