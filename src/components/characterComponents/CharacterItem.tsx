import CheckButton from "components/buttonComponents/CheckButton";
import styled from "styled-components";

type CharacterItemProps = {
    isDone :boolean
}

const CharacterItemDiv = styled.div`
    display: block;
    width: 180px;
    height: 30px;
    background: white;
    margin-top: 5px;
    margin-bottom: 5px;
`


const CharacterItem = ({isDone} : CharacterItemProps) => {

    return (
        <CharacterItemDiv>
            <CheckButton isDone={isDone} />
        </CharacterItemDiv>
    )
}

export default CharacterItem;