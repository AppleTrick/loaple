const inform: string[] = [
    "케릭터이름"
]

const daily: string[] = [
    "카오스던전","가디언토벌","일일에포나","길드출첵"
]

const weekly: string[] = [
    "발탄","비아키스","쿠크세이튼","아브렐슈드","아르고스","카양겔"
]

const characterMenuData  : string[][] = [
    inform,daily,weekly
]

const CharacterMenu = () => {

  
    return (
        <div>
            {
                characterMenuData.map((Menu) =>
                    (Menu.map((e, i) =>
                        (<div key={i}>{e}</div>)
                    ))
                )
            }
        </div>
       
    )
}

export default CharacterMenu