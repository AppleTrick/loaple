import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "modules";
import TopBar from "containers/TopBar";
import ProcyonComposs from "containers/ProcyonComposs";
import Occupation from "containers/Occupation";
import CharactersSchedule from "containers/CharactersSchedule";
import Expedition from "containers/Expedition";
// import { setNextResetTime } from "hooks/Date/Date";

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

    // const onclick = () => {
    //     setNextResetTime();
    // }
    return (
        <>
            <MainDiv open={openValue.open}>
                {/* <button onClick={onclick}>버튼</button> */}
                <TopBar />
                <ProcyonComposs/>
                <h1>
                    캐릭별 스케줄 변동 확인/
                </h1>
                <CharactersSchedule/>
                <Occupation/>
                <h1>
                    원정대 스케줄
                </h1>
                <Expedition/>
            </MainDiv>
        </>
    )
}

export default Main;