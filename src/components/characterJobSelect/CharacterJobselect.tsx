import styled from "styled-components";
import CharacterJobList from "./CharacterJobList";

const hunter = ["건슬링어","호크아이","데몬헌터","블래스터","스카우터"];
const shilin = ["바드","아르카나","서머너","소서리스"];
const anihc = ["기공사","인파이터","배틀마스터","창술사","스트라이커"];
const warriar = ["워로드", "홀리나이트", "버서커", "디스트로이어"];
const speciallist = ["도화가", "기상술사"];
const assassin = ["데모닉","블레이드","리퍼"]

const jobName = ["헌터","실린","애니츠","슈샤이어","스페셜리스트","암살자"];
const data = [hunter, shilin, anihc, warriar, speciallist,assassin]; 

const CharacterJobs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

interface CharacterJobSelectProps {
    close: () => void
    setJob : (N : string) => void
}

const CharacterJobSelect = ({ close, setJob} : CharacterJobSelectProps) => {
    return (
        <>
            <CharacterJobs>
                {data.map((e,i) => {
                    return <CharacterJobList key={i} arr={e} arrName={jobName[i]} onclose={close} setJob={setJob} />
                })}
            </CharacterJobs>
        </>
    )
}

export default CharacterJobSelect