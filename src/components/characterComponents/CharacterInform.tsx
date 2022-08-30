import { CharacterSchedule } from "modules/CharacterSchedule"
import CharacterItem from "./CharacterItem"
import styled from "styled-components"
import { ChangeMenuList, GetMenuList, SortWeeklyDaily } from "hooks/Schedule/Schedule"

type characterInformProps = {
    characterData : CharacterSchedule
}

const CharacterInformDiv = styled.div`
    width: 200px;
    /* background-color: pink; */
    margin-left: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const CharacteerNameDiv = styled.div`
    width: 180px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-bottom: solid;
    border-bottom-color: rgba(38, 29, 29, 0.5);
`

const CharacterInform = ({ characterData }: characterInformProps) => {

    const { CharacterName, Job } = characterData.CharacterInform
    const Daily = characterData.Daily;
    const Weekly = characterData.Weekly;

    return (
        <CharacterInformDiv>  
            <CharacteerNameDiv>
                {CharacterName} {Job}
            </CharacteerNameDiv>

            {GetMenuList().map((e, i) => {
                if (SortWeeklyDaily(e)) {
                    return <CharacterItem key={i} ID={ characterData.ID} isDone={Daily[ChangeMenuList(e)].isDone} RestGage={ Daily[ChangeMenuList(e)].RestGage} ItemName={ ChangeMenuList(e)}/>
                } else {
                    return <CharacterItem key={i} ID={characterData.ID } isDone={Weekly[ChangeMenuList(e)].isDone} ItemName={ ChangeMenuList(e)} />
                }
            })}
        </CharacterInformDiv>
    )
}

export default CharacterInform