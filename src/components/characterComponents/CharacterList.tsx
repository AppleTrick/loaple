import { RootState } from "modules";
import { CharacterSchedule } from "modules/CharacterSchedule";
import { useSelector } from "react-redux";
import CharacterInform from "./CharacterInform";
import styled from "styled-components";

const CharacterListDiv = styled.div`
    width: 100%;
    background-color: red;
    display: flex;
`

const CharacterList = () => {

    const dataValue = useSelector((state: RootState) => state.ScheduleReducer);

    return (
        <CharacterListDiv>
            {dataValue.Characters.map((e: CharacterSchedule, i) => {
                return <CharacterInform key={i} characterData={e} />
            } )}
        </CharacterListDiv>
    )
}

export default CharacterList;