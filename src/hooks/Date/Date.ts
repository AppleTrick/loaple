import { Reset_DailySchedule } from "modules/CharacterSchedule";
import { useDispatch } from "react-redux";
import { prcyonShowDispatch, procyonIsDoneChangeDispatch, weeklyReset } from "./DispatchFunc";


/**
 * 프로키온 데이터 표기 설정 함수
 */
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
/**
 * 프로키온 데이터 요일별 리셋
 */
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

/**
 * 다음 정시를 알려주는 함수
 * @returns string "??:00"
 */
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

/**
 * 최초접속을 확인하는 함수로
 * 이전 접속 기록이 없으면 (접속기록)을 생성, 다음 (리셋시간) 도 생성
 * 이전 접속기록이 없을 경우 false , 존재할 경우 true
 * @returns boolean
 */
export const checkConectTime = () => {
    if (getConnectTime() === null) {
        console.log("데이터 기록이 없음, 데이터 기록을 생성합니다.");
        setConnectTime();  // 마지막 접속기록 생성
        setNextResetTime(); // 다음 리셋 타임 생성
        return false;
    }
    return true;
}

/**
 * 현재 시간 리턴
 * @returns new Date()
 */
export const nowTime = () => {
    return new Date();
}

/**
 * 오늘 오전 6시 Date 객체
 * @returns new Date()
 */
export const todaySixAm = () => {
    return new Date(nowTime().getFullYear(), nowTime().getMonth(), nowTime().getDate(), 6);    
}

/**
 * ConnectTime Setter
 */
export const setConnectTime = () => {
    localStorage.setItem('lastConnectTime', JSON.stringify(nowTime()));     
}

/**
 * ConnectTime Getter
 * @returns (new Date) || null
 */
export const getConnectTime = () => {
    return JSON.parse(localStorage.getItem('lastConnectTime') || "null");
}

/**
 * 다음 리셋 시간 setter
 */
export const setNextResetTime = () => {
    const date = new Date(); 
    const day = date.getDay();
    // 현재 일 - 요일 + ( 일요일이면 + 1 /  아니면 다음주 월요일을 구하기 위해 + 8 + 수요일이니까 + 2 함)
    const calcDate = date.getDate() - day + ((day == 0 ? 1 : 8) + 2);  
    const nextDate = new Date(date.setDate(calcDate))
    const nextTime = new Date(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate(), 6);
    localStorage.setItem('ResetTime', JSON.stringify(nextTime)); 
}

/**
 * 다음 리셋 시간 getter
 * @returns stirng(new Date)|| null
 */
export const getNextResetTime = () => {
    return JSON.parse(localStorage.getItem('ResetTime') || "null");
}

/**
 * 프로키온 데이터 || 주간 데이터 리셋
 * @returns void
 */
export const oneTimeReset = () => {
    if (getConnectTime() == null) { 
        return;
    }

    const connectTime = new Date(getConnectTime()).getTime(); // 마지막 데이터 기록 시간
    const sixAm = todaySixAm().getTime(); // 오전 6시
    const now = nowTime().getTime(); // 현재시간
    const ResetTime = new Date(getNextResetTime()).getTime(); // 리셋 타임 

    if (now > ResetTime) {
        weeklyReset();
        setNextResetTime();
    }

    if (connectTime < sixAm && sixAm < now) {
        procyonReset();
    }

    setConnectTime(); 
}


/**
 * 일간 스케줄 리셋
 */
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
        // dispatch(Reset_DailySchedule(
        //     {
        //         RestGage: 0,
        //         plusNumbe : 0
        //     }
        // ))
        console.log("데이터 변화가 필요가 없음");
    }
}