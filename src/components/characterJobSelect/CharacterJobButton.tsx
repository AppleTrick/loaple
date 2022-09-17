import styled from "styled-components"

interface CharacterJobButtonProps {
    characterName : string 
}


const JobNameButton = styled.button`
    padding: 10px 20px;
    outline: none;
    border: 1px solid #607d8b;
    font-size: 10px;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 30px;
    
`

const CharacterJobButton = ({characterName} : CharacterJobButtonProps) => {
    return (
            <JobNameButton>
                {characterName}
            </JobNameButton>
    )
}

export default CharacterJobButton;