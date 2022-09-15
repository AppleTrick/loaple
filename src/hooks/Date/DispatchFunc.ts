import { Reset_WeeklySchedule } from "modules/CharacterSchedule";
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

export const weeklyReset = () => {
    const dispatch = useDispatch();   
    // 프로키온 데이터 리셋
    dispatch(procyonAllReset());
    // 주간 케릭터 일정 리셋
    dispatch(Reset_WeeklySchedule());
}
