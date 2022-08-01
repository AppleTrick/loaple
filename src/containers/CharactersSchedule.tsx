import CharacterList from "components/characterComponents/CharacterList";
import CharacterMenu from "components/characterComponents/CharacterMenu";
import styled from "styled-components";

const CharacterScheduleStyle = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 30px;
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
            <CharacterList/>
        </CharacterScheduleStyle>
    )
}

export default CharactersSchedule;