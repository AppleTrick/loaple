// 메뉴 리스트 리턴
export const GetMenuList = () => {
    const listType: string[] = ["카오스던전", "가디언토벌", "일일에포나", "길드출첵", "발탄", "비아키스", "쿠크세이튼", "아브렐슈드", "아르고스", "카양겔"]
    return listType;
}

// 해당 메뉴이름을 영문으로 바꿔서 리턴;
export const ChangeMenuList = (MenuName : string) => {
    const thisMenu = ["ChaosDungeon","Gaurdian","DailyEffona","GuildCheck","Valtan","Viakiss","Kukusaiton","Abrelshood","Argos","Kayangal"][["카오스던전", "가디언토벌", "일일에포나", "길드출첵", "발탄", "비아키스", "쿠크세이튼", "아브렐슈드", "아르고스", "카양겔"].indexOf(MenuName)];
    return thisMenu;
}

export const SortWeeklyDaily = (Name: string) => {
    const daily = ["카오스던전", "가디언토벌", "일일에포나", "길드출첵"];
    return daily.includes(Name) ? true : false
}