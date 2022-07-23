import CheckButton from "components/buttonComponents/CheckButton";
import CharacterMenu from "components/characterComponents/CharacterMenu";
import styled from "styled-components";

const CharacterScheduleStyle = styled.div`
    
`

const data = 1;
const CharactersSchedule = () => {
    if (!data) {
        return (
            <h1>케릭터를 추가하시겠습니까?</h1>
        )
    }
    return (
        <CharacterScheduleStyle>
            <CharacterMenu />
            <CheckButton/>
        </CharacterScheduleStyle>
    )
}

export default CharactersSchedule;