import { useGetJobImage } from "hooks/JobImage/JobImage"
import styled from "styled-components"

interface CharacterJobButtonProps {
    characterName: string 
    close: () => void
    setJob: (N : string) => void
}


const JobNameButton = styled.div`
    height: 50px;
    padding: 10px 10px;
    outline: none;
    border: 1px solid #607d8b;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const JobName = styled.div`
     font-size: 15px;
`

const JobImg = styled.img`
    margin-left: 15px;
    width: 30px;
    height: 30px;
`



const CharacterJobButton = ({ characterName, close,setJob }: CharacterJobButtonProps) => {
    
    const selectButton = () => {
        setJob(characterName);
        close();
    }

    return (
        <>
            <JobNameButton onClick={selectButton}>
                <JobName>
                    {characterName}
                </JobName>
                <JobImg src={useGetJobImage(characterName) } />
            </JobNameButton>
        </>
        
    )
}

export default CharacterJobButton;