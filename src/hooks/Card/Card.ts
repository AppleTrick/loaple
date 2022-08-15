const getThisCardName = (cardName: string) => {
    const thisName = ["chaosGate","ghostShip","fieldBoss","todayIsland","medeiaIsland","slimeIsland"][["카오스게이트", "유령선", "필드보스", "모험섬", "메데이아","슬라임섬"].indexOf(cardName)];
    return thisName
}

export {getThisCardName}