import styled from "styled-components"

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

const CharactcerMenusDiv = styled.div`
    width: 100px;
    background-color: aqua;
    margin-right: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const CharcterMenuDiv = styled.div`
    display: block;
    width: 70px;
    height: 30px;
    background: white;
    margin-top: 5px;
    margin-bottom: 5px;
`

const CharacterMenu = () => {

  
    return (
        <CharactcerMenusDiv>
            {
                characterMenuData.map((Menu) =>
                    (Menu.map((e, i) =>
                        (<CharcterMenuDiv key={i}>{e}</CharcterMenuDiv>)
                    ))
                )
            }

        </CharactcerMenusDiv>
       
    )
}

export default CharacterMenu