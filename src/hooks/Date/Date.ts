import { isSHowChange } from "modules/ProcyonCompossActions";
import { useDispatch } from "react-redux";


// 일 월 화 수 목 금 토 까지 프로키욘 나침반을 보여줌
const procyonDate = () => {
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
            break;
        // 월요일
        case 1:
            dispatch(isSHowChange({
                bool: true,
                propName: "chaosGate"
            }))
            break;
        // 화요일
        case 2:
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
            break;
        // 목요일
        case 4:
            dispatch(isSHowChange({
                bool: true,
                propName : "chaosGate"
            }))
            dispatch(isSHowChange({
                bool: true,
                propName : "ghostShip"
            }))
            break;
        // 금요일
        case 5:
            dispatch(isSHowChange({
                bool: true,
                propName : "fieldBoss"
            }))
            break;
        // 토요일
        case 6:
            dispatch(isSHowChange({
                bool: true,
                propName : "chaosGate"
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
const procyonHour = () => {
    const date = new Date();
    let hour = date.getHours() + 1;
    if (hour > 5 && hour < 10) {
        hour = 10;
    } else if (hour === 24) {
        hour = 0
    }

    return `${hour}:00`;
}

export { procyonDate , procyonHour}