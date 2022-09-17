import styled from "styled-components"
import CharacterJobButton from "./CharacterJobButton"


const CharacterJobContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`

const JobTagDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const JobCollection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

interface CharacterJobListProps {
    arr: string[]
    arrName : string
}

const CharacterJobList = ({arr,arrName} : CharacterJobListProps) => {
    return (
        <>
            <CharacterJobContainer>
                <JobTagDiv>
                        {arrName}
                </JobTagDiv>
                <JobCollection>
                    {arr.map((e,i) => {
                        return <CharacterJobButton key={i} characterName={ e } />
                    })}
                </JobCollection>
            </CharacterJobContainer>
        </>
    )
}

export default CharacterJobList;