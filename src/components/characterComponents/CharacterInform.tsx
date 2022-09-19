import { CharacterSchedule } from "modules/CharacterSchedule"
import CharacterItem from "./CharacterItem"
import styled from "styled-components"
import { ChangeMenuList, GetMenuList, SortWeeklyDaily } from "hooks/Schedule/Schedule"
import { useState } from "react"
import CharacterUpdateModal from "components/modal/CharacterUpdateModal"
import { useGetJobImage } from "hooks/JobImage/JobImage"

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
const JobImg = styled.img`
    margin-left: 10px;
    width: 30px;
    height: 30px;
`

const CharacterInform = ({ characterData }: characterInformProps) => {

    const { CharacterName, Job } = characterData.CharacterInform
    const Daily = characterData.Daily;
    const Weekly = characterData.Weekly;

    // 모달 부분
    const [CharacterModal, setCharacterModal] = useState<boolean>(false)

    const openCharacterInform = () => {
        setCharacterModal(true);
    }

    const closeCharacterInform = () => {
        setCharacterModal(false);
    }

    return (
        <>
        <CharacterInformDiv>  
                <CharacteerNameDiv onClick={openCharacterInform}>
                    <div>
                         {CharacterName} 
                    </div>
                    <JobImg src={useGetJobImage(Job)} />
            </CharacteerNameDiv>

            {GetMenuList().map((e, i) => {
                if (SortWeeklyDaily(e)) {
                    return <CharacterItem key={i} ID={ characterData.ID} isDone={Daily[ChangeMenuList(e)].isDone} RestGage={ Daily[ChangeMenuList(e)].RestGage} ItemName={ ChangeMenuList(e)}/>
                } else {
                    return <CharacterItem key={i} ID={characterData.ID } isDone={Weekly[ChangeMenuList(e)].isDone} ItemName={ ChangeMenuList(e)} />
                }
            })}
            </CharacterInformDiv>
            {CharacterModal && <CharacterUpdateModal onClose={closeCharacterInform} getCharacterData={ characterData } />}
        </>
    )
}

export default CharacterInform