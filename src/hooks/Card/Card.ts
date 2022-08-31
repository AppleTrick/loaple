import chaosGate from "../../assets/icon/chaosGate.png"
import ghostShip from "../../assets/icon/ghostShip.png"
import todayIsland from "../../assets/icon/todayIsland.png"
import fieldBoss from "../../assets/icon/fieldBoss.png"
import medeiaIsland from "../../assets/icon/medeiaIsland.png"
import slimeIsland from "../../assets/icon/slimeIsland.png"


// 이름에 따른 카드 이름 가지고오기
const getThisCardName = (cardName: string) => {
    const thisName = ["chaosGate","ghostShip","fieldBoss","todayIsland","medeiaIsland","slimeIsland"][["카오스게이트", "유령선", "필드보스", "모험섬", "메데이아","슬라임섬"].indexOf(cardName)];
    return thisName
}

// 이름에 따른 아이콘 파일 가져 오기
const iconImage = (scheduleName : string) => {
    const thisName = [chaosGate, ghostShip, fieldBoss, todayIsland, medeiaIsland, slimeIsland][["카오스게이트", "유령선", "필드보스", "모험섬", "메데이아", "슬라임섬"].indexOf(scheduleName)];    
    return thisName
}

export {getThisCardName, iconImage}