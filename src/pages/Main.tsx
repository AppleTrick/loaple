import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "modules";
import TopBar from "containers/TopBar";
import ProcyonComposs from "containers/ProcyonComposs";
import Occupation from "containers/Occupation";
import CharactersSchedule from "containers/CharactersSchedule";
import { useDispatch } from "react-redux";
import { IsDone_Toggle, Test } from "modules/CharacterSchedule";

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

    console.log(dataValue.Characters[0].CharacterInform.CharacterName);

    const dispatch = useDispatch();

    const nameChange = (text1: string) => {
        console.log(text1);
        
        dispatch(Test(text1));
    }

    const nameChangeCheck = () => {
        console.log(dataValue.Characters[0].CharacterInform.CharacterName);
    }
    

    return (
        <>
            <MainDiv open={openValue.open}>
                <button onClick={()=>nameChange("park")}>이름바꾸기</button>
                <button onClick={()=>nameChangeCheck()}>이름바꾼거 확인</button>
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