import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "modules";
import TopBar from "containers/TopBar";
import ProcyonComposs from "containers/ProcyonComposs";
import Occupation from "containers/Occupation";
import CharactersSchedule from "containers/CharactersSchedule";
import { procyonDate } from "hooks/Date/Date";

const MainDiv = styled.div<{open : boolean}>`
    position: absolute;
    width: calc(${(props) => (props.open ? "100% - 300px" : "100% - 80px")});
    left: ${(props) => (props.open ? "300px" : "80px")};
    min-height: 100vh;
    background: var(--white);
    transition: 0.5s;
`


const Main = () => {
    const openValue = useSelector((state: RootState) => state.naviactions);
    const dataValue = useSelector((state: RootState) => state.ScheduleReducer);

    const nameChangeCheck = () => {
        // 이름 체크용 코드
        // console.log(dataValue.Characters[0].CharacterInform.CharacterName);

        const date = new Date();
        const something = date.getHours();
        console.log(something+1);

    }


    return (
        <>
            <MainDiv open={openValue.open}>
                <button onClick={()=>nameChangeCheck()}>데이터 확인</button>
                <TopBar />
                <ProcyonComposs/>
                <h1>
                    캐릭별 스케줄
                </h1>
                <CharactersSchedule/>
                <Occupation/>
                <h1>
                    원정대 스케줄
                </h1>
            </MainDiv>
        </>
    )
}

export default Main;