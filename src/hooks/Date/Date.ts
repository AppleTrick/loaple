import { isSHowChange, procyonAllReset } from "modules/ProcyonCompossActions";
import { useDispatch } from "react-redux";


// 일 월 화 수 목 금 토 까지 프로키욘 나침반을 보여줌
export const procyonDate = () => {
    const dispatch = useDispatch();   
    const date = new Date();
    switch (date.getDay()) {
        // 일요일
        case 0:
            dispatch(isSHowChange({
                bool: true,
                propName : "chaosGate"
            }))
            dispatch(isSHowChange({
                bool: true,
                propName : "fieldBoss"
            }))
            dispatch(isSHowChange({
                bool: false,
                propName : "ghostShip"
            }))
            break;
        // 월요일
        case 1:
            dispatch(isSHowChange({
                bool: true,
                propName: "chaosGate"
            }))
            dispatch(isSHowChange({
                bool: false,
                propName : "fieldBoss"
            }))
            dispatch(isSHowChange({
                bool: false,
                propName : "ghostShip"
            }))
            break;
        // 화요일
        case 2:
            dispatch(isSHowChange({
                bool: false,
                propName: "chaosGate"
            }))
            dispatch(isSHowChange({
                bool: true,
                propName : "fieldBoss"
            }))
            dispatch(isSHowChange({
                bool: true,
                propName : "ghostShip"
            }))
            break;
        // 수요일
        case 3:
            dispatch(isSHowChange({
                bool: false,
                propName: "chaosGate"
            }))
            dispatch(isSHowChange({
                bool: false,
                propName : "fieldBoss"
            }))
            dispatch(isSHowChange({
                bool: false,
                propName : "ghostShip"
            }))
            break;
        // 목요일
        case 4:
            dispatch(isSHowChange({
                bool: true,
                propName : "chaosGate"
            }))
            dispatch(isSHowChange({
                bool: false,
                propName : "fieldBoss"
            }))
            dispatch(isSHowChange({
                bool: true,
                propName : "ghostShip"
            }))
            break;
        // 금요일
        case 5:
            dispatch(isSHowChange({
                bool: false,
                propName : "chaosGate"
            }))
            dispatch(isSHowChange({
                bool: true,
                propName : "fieldBoss"
            }))
            dispatch(isSHowChange({
                bool: false,
                propName : "ghostShip"
            }))
            break;
        // 토요일
        case 6:
            dispatch(isSHowChange({
                bool: true,
                propName : "chaosGate"
            }))
            dispatch(isSHowChange({
                bool: false,
                propName : "fieldBoss"
            }))
            dispatch(isSHowChange({
                bool: true,
                propName : "ghostShip"
            }))
            break;
        default:
            break;
    }
}

// 다음 시간알려주는 함수
export const procyonHour = () => {
    const date = new Date();
    let hour = date.getHours() + 1;
    if (hour > 5 && hour < 10) {
        hour = 10;
    } else if (hour === 24) {
        hour = 0
    }

    return `${hour}:00`;
}

// 처음 접속기록 확인하기
export const checkConectTime = () => {

    // 기록이 없으면 데이터를 저장시켜줌
    if (getConectTime() == null) {
        setConectTime();
        return false;
    }

    // 기록이 있으면 
    return true;
}


// 접속 기록 저장
export const setConectTime = () => {
    const date = new Date();
    localStorage.setItem('lastConectTime', JSON.stringify(date.getTime()));     
}

// 접속 기록 가지고 오기
export const getConectTime = () => {
    return JSON.parse(localStorage.getItem('lastConectTime') || "null");
}

// 현재 시간 가지고 오기
export const nowTime = () => {
    const date = new Date();
    return date.getTime();
}

// 주간 프로키온 초기화
export const weeklyProcyonReset = () => {
    const dispatch = useDispatch(); 
    dispatch(procyonAllReset());
}

