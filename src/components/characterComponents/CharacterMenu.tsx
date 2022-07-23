const inform: string[] = [
    "케릭터이름" , "레벨" , "직업"
]

const daily: string[] = [
    "카오스던전","가디언토벌","일일에포나","길드출첵"
]

const weekly: string[] = [
    "발탄","비아키스","쿠크세이튼","아브렐슈드","길드섬토벌","주간에포나"
]

const characterMenuData  : string[][] = [
    inform,daily,weekly
]

const CharacterMenu = () => {

  
    return (
        <>
            {
                characterMenuData.map((Menu) =>
                    (Menu.map((e, i) =>
                        (<div key={i}>{e}</div>)
                    ))
                )
            }
        </>
       
    )
}

export default CharacterMenu