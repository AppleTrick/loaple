import { RootState } from "modules";
import { CharacterSchedule } from "modules/CharacterSchedule";
import { useSelector } from "react-redux";
import CharacterInform from "./CharacterInform";
import styled from "styled-components";
import AddCharacterButton from "components/buttonComponents/AddCharacterButton";

const CharacterListDiv = styled.div`
    width: 100%;
    background-color: #c5ed8c;
    display: flex;
    overflow: scroll;
    white-space: nowrap;

    &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
    }
    &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #9716b17e;
    }
`

const CharacterList = () => {

    const dataValue = useSelector((state: RootState) => state.ScheduleReducer);

    return (
        <CharacterListDiv>
            {dataValue.Characters.map((e: CharacterSchedule, i) => {
                return <CharacterInform key={i} characterData={e} />
            })}
            <AddCharacterButton/>
        </CharacterListDiv>
    )
}

export default CharacterList;