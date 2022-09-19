import styled from "styled-components"
import CharacterJobButton from "./CharacterJobButton"


const CharacterJobContainer = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
`

const JobTagDiv = styled.div`
    width : 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    background-color: gray;
    margin-right: 10px;
    font-size :15px;
    
`


const JobCollection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`

interface CharacterJobListProps {
    arr: string[]
    arrName: string
    onclose: () => void
    setJob : (N : string) => void
}

const CharacterJobList = ({ arr, arrName , onclose, setJob }: CharacterJobListProps) => {
    return (
        <>
            <CharacterJobContainer>
                <JobTagDiv>
                        {arrName}
                </JobTagDiv>
                <JobCollection>
                    {arr.map((e,i) => {
                        return <CharacterJobButton key={i} characterName={e} close={ onclose } setJob={setJob} />
                    })}
                </JobCollection>
            </CharacterJobContainer>
        </>
    )
}

export default CharacterJobList;