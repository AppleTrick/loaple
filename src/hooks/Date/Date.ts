import { isDoneChange, isSHowChange, procyonAllReset } from "modules/ProcyonCompossActions";
import { useDispatch } from "react-redux";


// 일 월 화 수 목 금 토 까지 프로키욘 나침반을 보여줌
export const procyonDate = () => {
    const dispatch = useDispatch();   
    const date = new Date();

    const six = todaySixAm().getTime();    // 오전 6시
    const now = nowTime().getTime();       // 현재 시간

    let dayVal = date.getDay()             // 현재 요일

    if (six > now) {                       // 오전 6시 이전에면 이전 일 프로키온 나침반을 표기해준다.
        dayVal = dayVal - 1;
        if (dayVal < 0) {
            dayVal = 6;
        }
    } 

    switch (dayVal) {
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
    if (getConnectTime() === null) {
        console.log("데이터 기록이 없음, 데이터 기록을 생성합니다.");
        setConnectTime(); // 시간 설정
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
export const setConnectTime = () => {
    const date = new Date();
    localStorage.setItem('lastConnectTime', JSON.stringify(date));     
}

// 이전 접속 기록 가지고 오기
export const getConnectTime = () => {
    const getData = JSON.parse(localStorage.getItem('lastConnectTime') || "null");
    return getData;
}

// 현재 시간 가지고 오기
export const nowTime = () => {
    const date = new Date();
    return date;
}

// 주간 값 가지고 오기
export const getWeeklyResetValue = () => {
    const getWeeklyResetValue = JSON.parse(localStorage.getItem('weeklyResetValue') || "null");
    return getWeeklyResetValue;
}

// 주간 값 세팅 하기
export const setWeeklyResetValue = (isValue : boolean ) => {
    localStorage.setItem('weeklyResetValue', JSON.stringify(isValue));   
}

// 프로키온 데이터 리셋함수
export const oneTimeReset = () => {
    if (getConnectTime() == null) { // 예외 처리부분
        return;
    }
    const connectTime = new Date(getConnectTime()).getTime(); // 마지막 데이터 기록 시간
    const sixAm = todaySixAm().getTime(); // 오전 6시
    const now = nowTime().getTime(); // 현재시간
  
    if (connectTime < sixAm && now < sixAm) {
        console.log("리셋불필요");
    } else if (connectTime < sixAm && sixAm < now) {
        console.log("프로키온 데이터 리셋필요");
        dailyReset();
    } else {
        console.log("리셋불필요");
    }
    setConnectTime(); // 마지막 접속 기록을 리셋 시켜준다.
}

// 일간 스케줄 초기화
// 여기에 나중에 일간 스케줄 초기화도 시켜줘야됨
export const dailyReset = () => {
    const date = new Date();
    const dispatch = useDispatch(); 

    // 프로키온 초기화
    switch (date.getDay()) {
        // 일요일
        case 0:
            dispatch(isDoneChange({
                bool: false,
                propName : "chaosGate"
            }))
            dispatch(isDoneChange({
                bool: false,
                propName : "fieldBoss"
            }))
            dispatch(isDoneChange({
                bool: false,
                propName : "todayIsland"
            }))
            break;
        // 월요일
        case 1:
            dispatch(isDoneChange({
                bool: false,
                propName: "chaosGate"
            }))
            dispatch(isDoneChange({
                bool: false,
                propName : "todayIsland"
            }))
            break;
        // 화요일
        case 2:
            dispatch(isDoneChange({
                bool: false,
                propName : "fieldBoss"
            }))
            dispatch(isDoneChange({
                bool: false,
                propName : "todayIsland"
            }))
            break;
        // 수요일
        case 3:
            dispatch(isDoneChange({
                bool: false,
                propName: "chaosGate"
            }))
            dispatch(isDoneChange({
                bool: false,
                propName : "fieldBoss"
            }))
            dispatch(isDoneChange({
                bool: false,
                propName : "todayIsland"
            }))
            break;
        // 목요일
        case 4:
            dispatch(isDoneChange({
                bool: false,
                propName : "chaosGate"
            }))
            dispatch(isDoneChange({
                bool: false,
                propName : "todayIsland"
            }))
            break;
        // 금요일
        case 5:
            dispatch(isDoneChange({
                bool: false,
                propName : "fieldBoss"
            }))
            dispatch(isDoneChange({
                bool: false,
                propName : "todayIsland"
            }))
            break;
        // 토요일
        case 6:
            dispatch(isDoneChange({
                bool: false,
                propName : "chaosGate"
            }))
            dispatch(isDoneChange({
                bool: false,
                propName : "todayIsland"
            }))
            break;
        // 예외처리사항
        default:
            break;
    }


    // 스케줄 초기화 알고리즘
}

// 주간 프로키온 , 일정 초기화 알고리즘
export const weeklyReset = () => {
    const dispatch = useDispatch(); 
    dispatch(isDoneChange({
        bool: false,
        propName : "ghostShip"
    }))
    dispatch(isDoneChange({
        bool: false,
        propName : "slimeIsland"
    }))
    dispatch(isDoneChange({
        bool: false,
        propName : "medeiaIsland"
    }))
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

export const scheduleReset = () => {
    // 날짜기 지낫는지 확인해야됨
    // 과거 데이터 < 현재 접속일 < 오전 현재일 6시일 경우
    // 과거 데이터 접속 < 현재일 오전 6시 < 현재 접속일일 경우
    // 현재일 오전 6시 < 과거 데이터 < 현재 접속일일 경우 => noting
    return 0;
}