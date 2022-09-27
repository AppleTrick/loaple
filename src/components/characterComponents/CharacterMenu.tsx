import { GetMenuList, useMenuListIcon } from "hooks/Schedule/Schedule"
import styled from "styled-components"

const inform: string[] = [
    "케릭터이름"
]

const characterMenuData: string[][] = [
    inform, GetMenuList()
]

const CharactcerMenusDiv = styled.div`
    width: 150px;
    background: #424242;
    margin-right: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(min-height: 768px){
        width: 27vh;
    }
`

const CharcterMenuDiv = styled.div`
    width: 100px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: solid;
    border-bottom-color: rgba(38, 29, 29, 0.5);
    color: white;

    @media(min-height: 768px){
        width: 18vh;
    }
`

const IconImgDiv = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px;
`

const NameDiv = styled.div`
    float:right;
    flex-grow: 1;
    text-align: center;
`
const RealNameDiv = styled.div`
    font-size: 0.8rem;

    @media(min-height: 768px){
        font-size: 1rem;
    }
`

const CharacterMenu = () => {

    const isImageExist = (e: string) => {
        if (useMenuListIcon(e)) {
            return <IconImgDiv src={useMenuListIcon(e) } />
        } else {
            return ""
        }
    }

    return (
        <CharactcerMenusDiv>
            {
                characterMenuData.map((Menu) =>
                    (Menu.map((e, i) =>
                        (
                            <CharcterMenuDiv key={i}>
                                {isImageExist(e)}
                            <NameDiv>
                                <RealNameDiv>
                                    {e}
                                </RealNameDiv>
                            </NameDiv>
                               
                            </CharcterMenuDiv>
                        )
                    ))
                )
            }

        </CharactcerMenusDiv>
       
    )
}

export default CharacterMenu