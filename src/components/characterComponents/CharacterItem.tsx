import CheckboxButton from "components/buttonComponents/CheckBoxButton";
import styled from "styled-components";

type CharacterItemProps = {
    isDone: boolean
    ItemName : string
    RestGage ?: number
}

const CharacterItemDiv = styled.div`    
    width: 180px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-bottom: solid;
    border-bottom-color: rgba(38, 29, 29, 0.5);
`


const CharacterItem = ({ isDone, RestGage, ItemName }: CharacterItemProps) => {
    return (
        <CharacterItemDiv>
            <CheckboxButton isDone={isDone} RestGage={RestGage} ItemName={ItemName} />
        </CharacterItemDiv>
    )
}

export default CharacterItem;