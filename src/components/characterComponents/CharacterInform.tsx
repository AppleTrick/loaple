import { CharacterSchedule } from "modules/CharacterSchedule"
import CharacterItem from "./CharacterItem"
import styled from "styled-components"

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
            {/* Daily */}
            <CharacterItem isDone={Daily.ChaosDungeon.isDone} />
            <CharacterItem isDone={Daily.Gaurdian.isDone} />
            <CharacterItem isDone={Daily.DailyEffona.isDone} />
            <CharacterItem isDone={Daily.GuildCheck.isDone} />
            {/* Weekly */}
            <CharacterItem isDone={Weekly.Valtan.isDone} />
            <CharacterItem isDone={Weekly.Viakiss.isDone} />
            <CharacterItem isDone={Weekly.Kukusaiton.isDone} />
            <CharacterItem isDone={Weekly.Abrelshood.isDone} />
            <CharacterItem isDone={Weekly.Argos.isDone} />
            <CharacterItem isDone={Weekly.Kayangal.isDone} />
        </CharacterInformDiv>
    )
}

export default CharacterInform