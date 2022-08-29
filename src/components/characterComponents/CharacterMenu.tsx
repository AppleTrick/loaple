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
    background: #424242;
    margin-right: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const CharcterMenuDiv = styled.div`
    width: 70px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-bottom: solid;
    border-bottom-color: rgba(38, 29, 29, 0.5);
    color: white;
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