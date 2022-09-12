// 메뉴 리스트 리턴
export const GetMenuList = () => {
    const listType: string[] = ["카오스던전", "가디언토벌", "일일에포나", "길드출첵", "발탄", "비아키스", "쿠크세이튼", "아브렐슈드","일리아칸","아르고스", "카양겔"]
    return listType;
}

// 해당 메뉴이름을 영문으로 바꿔서 리턴;
export const ChangeMenuList = (MenuName : string) => {
    const thisMenu = ["ChaosDungeon","Gaurdian","DailyEffona","GuildCheck","Valtan","Viakiss","Kukusaiton","Abrelshood","Akkan","Argos","Kayangal"][["카오스던전", "가디언토벌", "일일에포나", "길드출첵", "발탄", "비아키스", "쿠크세이튼", "아브렐슈드","일리아칸","아르고스", "카양겔"].indexOf(MenuName)];
    return thisMenu;
}

// 주간일정 일일일정 한글로 구분하는 함수
export const SortWeeklyDaily = (Name: string) => {
    const daily = ["카오스던전", "가디언토벌", "일일에포나", "길드출첵"];
    return daily.includes(Name) ? true : false
}

// 주간일정 일일일정 영문으로 구분하는 함수
export const SortWeeklyDailyEN = (Name: string) => {
    const daily = ["ChaosDungeon","Gaurdian","DailyEffona","GuildCheck"];
    return daily.includes(Name) ? true : false
}

// 원정대 일정 리스트로 가지고 오기
export const GetExpeditionList = () => {
    const List = ["도전어비스", "도전가디언", "에포나보상", "균열의조각"];
    return List;
}

// 원정대 일정 영문으로 변경
export const ChangExpedtionList = (Name : string) => {
    const List = ["ChallengeAbyss","ChallengeGuardian","EffonaReward","CrackPieceReward"][["도전어비스", "도전가디언", "에포나보상", "균열의조각"].indexOf(Name)];
    return List;
}