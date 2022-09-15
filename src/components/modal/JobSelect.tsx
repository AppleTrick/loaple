import styled from "styled-components";

interface JobSelectProps {
    close : () => void
}

const AllDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    z-index:995;
`

const JobSelectDiv = styled.div`
    width:720px;
    height:360px;
    background: royalblue;
`
const hunter = ["건슬링어","호크아이","데몬헌터","블래스터"];
const shilin = ["바드","아르카나","서머너","소서리스"];
const speciallist = ["도화가","기상술사"];
const anihc = ["기공사","인파이터","배틀마스터","창술사"];
const warriar = ["워로드", "홀리나이트","버서커","디스트로이어"];
const data = [warriar, hunter, shilin, anihc, speciallist]; 

const JobSelect = ({close}: JobSelectProps)   => {
    return (
        <AllDiv>
            <JobSelectDiv>
                <button onClick={close}>끄기</button>
            </JobSelectDiv>
        </AllDiv>
           
    )
}

export default JobSelect;

