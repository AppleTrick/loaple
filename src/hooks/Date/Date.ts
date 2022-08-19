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

    
    if (getConectTime() === null) {
        console.log("접속 기록이 없음, 접속기록을 생성합니다.");
        setConectTime();
        return false;
    }

    // 기록이 있으면 
    return true;
}


// 오늘 오전 6시 Date 객체를 리턴시킴
export const todaySixAm = () => {
    const date = new Date();
    const six = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 6);
    return six;    
}

// 접속 기록 저장
export const setConectTime = () => {
    const date = new Date();
    localStorage.setItem('lastConectTime', JSON.stringify(date));     
}

// 이전 접속 기록 가지고 오기
export const getConectTime = () => {
    const getData = JSON.parse(localStorage.getItem('lastConectTime') || "null");
    return getData;
}

// 현재 시간 가지고 오기
export const nowTime = () => {
    const date = new Date();
    return date;
}

export const oneTimeReset = () => {
    if (getConectTime() == null) { // 예외 처리부분
        return;
    }
    const conectTime = new Date(getConectTime()).getTime(); // 마지막 접속 시간
    const sixAm = todaySixAm().getTime(); // 오전 6시
    const now = nowTime().getTime(); // 현재시간
  
    if (conectTime < sixAm && now < sixAm) {
        console.log("리셋불필요");
      
    } else if (conectTime < sixAm && sixAm < now) {
        console.log("리셋필요");
        
    } else {
        console.log("리셋불필요");
    }
    setConectTime();
}

// 프로키온 초기화
export const weeklyProcyonAllReset = () => {
    const dispatch = useDispatch(); 
    dispatch(procyonAllReset());
}

// 스케줄 전부 초기화
export const characterAllReset = () => {
    return 0;
}

// 일간 스케줄 초기화
export const dailyReset = () => {
    const date = new Date();
    const dispatch = useDispatch();  
    switch (date.getDay()) {
        // 일요일
        case 0:
            break;
        // 월요일
        case 1:
            break;
        // 화요일
        case 2:
            break;
        // 수요일
        case 3:
            break;
        // 목요일
        case 4:
            break;
        // 금요일
        case 5:
            break;
        // 토요일
        case 6:
            break;
        // 예외처리사항
        default:
            break;
    }
    
}