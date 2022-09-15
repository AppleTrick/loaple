import { Reset_DailySchedule } from "modules/CharacterSchedule";
import { useDispatch } from "react-redux";
import { prcyonShowDispatch, procyonIsDoneChangeDispatch, weeklyReset } from "./DispatchFunc";


// 화면 표기 리셋
export const procyonDate = () => {
    const date = new Date();

    const six = todaySixAm().getTime();    
    const now = nowTime().getTime();      

    let dayVal = date.getDay()             

    if (six > now) {                      
        dayVal = dayVal - 1;
        if (dayVal < 0) {
            dayVal = 6;
        }
    } 

    switch (dayVal) {
        // 일요일
        case 0:
            prcyonShowDispatch(true, true, false);
            break;
        // 월요일
        case 1:
            prcyonShowDispatch(true, false, false);
            break;
        // 화요일
        case 2:
            prcyonShowDispatch(false, true, true);
            break;
        // 수요일
        case 3:
            prcyonShowDispatch(false, false, false);
            break;
        // 목요일
        case 4:
            prcyonShowDispatch(true, false, true);
            break;
        // 금요일
        case 5:
            prcyonShowDispatch(false, true, false);
            break;
        // 토요일
        case 6:
            prcyonShowDispatch(true, false, true);
            break;
        default:
            break;
    }
}
// 체크표시 리셋
export const procyonReset = () => {
    switch (nowTime().getDay()) {
        case 0:
            procyonIsDoneChangeDispatch(false, false, false);
            break;
        case 1:
            procyonIsDoneChangeDispatch(false, undefined, false);
            break;
        case 2:
            procyonIsDoneChangeDispatch(undefined, false, false);
            break;
        case 3:
            procyonIsDoneChangeDispatch(false, false, false);
            break;
        case 4:
            procyonIsDoneChangeDispatch(false, undefined, false);
            break;
        case 5:
            procyonIsDoneChangeDispatch(undefined, false, false);
            break;
        case 6:
            procyonIsDoneChangeDispatch(false, undefined, false);
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
    if (getConnectTime() === null) {
        console.log("데이터 기록이 없음, 데이터 기록을 생성합니다.");
        setConnectTime(); 
        return false;
    }
    return true;
}

// 현재 시간 가지고 오기
export const nowTime = () => {
    return new Date();
}

// 오늘 오전 6시 Date 객체를 리턴시킴
export const todaySixAm = () => {
    return new Date(nowTime().getFullYear(), nowTime().getMonth(), nowTime().getDate(), 6);    
}

// setter 접속 기록 저장 
export const setConnectTime = () => {
    localStorage.setItem('lastConnectTime', JSON.stringify(nowTime()));     
}

// getter 접속 기록 가지고 오기
export const getConnectTime = () => {
    return JSON.parse(localStorage.getItem('lastConnectTime') || "null");
}

// setter 리셋 타임 저장
export const setNextResetTime = () => {
    const date = new Date(); 
    const day = date.getDay();
    // 현재 일 - 요일 + ( 일요일이면 + 1 /  아니면 다음주 월요일을 구하기 위해 + 8 + 수요일이니까 + 2 함)
    const calcDate = date.getDate() - day + ((day == 0 ? 1 : 8) + 2);  
    const nextDate = new Date(date.setDate(calcDate))
    const nextTime = new Date(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate(), 6);
    localStorage.setItem('ResetTime', JSON.stringify(nextTime)); 
}

// getter 리셋 타임 가지고 오기
export const getNextResetTime = () => {
    return JSON.parse(localStorage.getItem('ResetTime') || "null");
}

// 프로키온 데이터 리셋함수
export const oneTimeReset = () => {
    if (getConnectTime() == null) { 
        return;
    }

    const connectTime = new Date(getConnectTime()).getTime(); // 마지막 데이터 기록 시간
    const sixAm = todaySixAm().getTime(); // 오전 6시
    const now = nowTime().getTime(); // 현재시간
    const ResetTime = new Date(getNextResetTime()).getTime(); // 리셋 타임 

    if (now > ResetTime) {
        // 모든 주간데이터 리셋 하는 함수 작동시키키
        weeklyReset();
        // 리셋 이후 다음 리셋 타임 잡기
        setNextResetTime();
    }

    if (connectTime < sixAm && sixAm < now) {
        console.log("프로키온 데이터 리셋");
        procyonReset();
    }

    setConnectTime(); 
}

export const scheduleReset = () => {
    const connectTime = new Date(getConnectTime()).getTime(); // 마지막 데이터 기록 시간
    const sixAm = todaySixAm().getTime(); // 오전 6시
    const now = nowTime().getTime(); // 현재시간

    const dispatch = useDispatch(); 
    
    // 과거 데이터 < 현재 접속일 < 오전 현재일 6시일 경우 :: 새벽
    if (connectTime < now && now < sixAm) {
        
        const tweenty24 = 1 * 1000 * 60 * 60 * 24; // 24시간 계산

        if (tweenty24 + connectTime - sixAm > 0) {
            console.log("데이터 변화가 필요가 없음");
        } else {
            const Gage = Math.floor((sixAm - connectTime) / tweenty24);
            dispatch(Reset_DailySchedule(
                {
                    RestGage: Gage - 1,
                    plusNumbe : 0
                }
            ))        
        }
        
    // 과거 데이터 접속 < 현재일 오전 6시 < 현재 접속일일 경우  :: 오전 오후
    } else if (connectTime < sixAm && sixAm < now) {
        const value = sixAm - connectTime
        const tweenty24 = 1 * 1000 * 60 * 60 * 24;

        if (value < tweenty24) { //하루 이하
            dispatch(Reset_DailySchedule(
                {
                    RestGage: 0,
                    plusNumbe : 0
                }
            ))
        } else { // 하루 이상
            const Gage = Math.floor(value / tweenty24);
            dispatch(Reset_DailySchedule(
                {
                    RestGage: Gage,
                    plusNumbe : 0
                }
            ))
        }
    
    // 현재일 오전 6시 < 과거 데이터 < 현재 접속일일 경우 => noting
    } else if (sixAm < connectTime && connectTime < now) {
        // 리셋 즉각적용 보기
        dispatch(Reset_DailySchedule(
            {
                RestGage: 0,
                plusNumbe : 0
            }
        ))
        console.log("데이터 변화가 필요가 없음");
    }
}