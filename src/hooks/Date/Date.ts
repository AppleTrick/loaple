type ProcyonScheduleDate = {
    chaosGate: boolean,
    fieldBoss: boolean,
    ghostShip : boolean,
}

const procyonDate = () => {
    const date = new Date();

    const dayinform: ProcyonScheduleDate = {
        chaosGate: false,
        fieldBoss: false,
        ghostShip: false,
    }

    switch (date.getDay()) {
        // 일요일
        case 0:
            dayinform.chaosGate = true;
            dayinform.fieldBoss = true;
            return dayinform
        // 월요일
        case 1:
            dayinform.chaosGate = true;
            return dayinform;
        // 화요일
        case 2:
            dayinform.fieldBoss = true;
            dayinform.ghostShip = true;
            return dayinform;
        // 수요일
        case 3:
            return dayinform;
        // 목요일
        case 4:
            dayinform.chaosGate = true;
            dayinform.ghostShip = true;
            return dayinform;
        // 금요일
        case 5:
            dayinform.fieldBoss = true;
            return dayinform;
        // 토요일
        case 6:
            dayinform.chaosGate = true;
            dayinform.ghostShip = true;
            return dayinform;
        default:
            return dayinform;
    }
}

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