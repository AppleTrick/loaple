import CharacterJobSelect from "../characterJobSelect/CharacterJobselect";
import styled from "styled-components";

interface JobSelectProps {
    close: () => void
    setJob : (N : string) => void
}

const AllDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    /* background-color: transparent; */
    background-color: rgba(0,0,0,0.25);
    justify-content: center;
    align-items: center;
    z-index:995;
`

const JobSelectDiv = styled.div`
    width:820px;
    height:360px;
    background: white;
`

const JobSelect = ({close, setJob}: JobSelectProps)   => {
    return (
        <AllDiv>
            <JobSelectDiv>
                <CharacterJobSelect close={ close } setJob={setJob} />
            </JobSelectDiv>
        </AllDiv>
           
    )
}

export default JobSelect;

