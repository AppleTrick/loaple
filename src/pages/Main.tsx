import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "modules";
import TopBar from "containers/TopBar";
import ProcyonComposs from "containers/ProcyonComposs";
import Occupation from "containers/Occupation";
import CharactersSchedule from "containers/CharactersSchedule";
import { useDispatch } from "react-redux";
import { IsDone_Toggle } from "modules/CharacterSchedule";
import { EffectCallback, useEffect, useState } from "react";
import { fetchIsland, IslandsResponse } from "api/axios";

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
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const milliseconds = date.getMilliseconds();

        console.log('time: ' + date.toLocaleTimeString('ko-kr'));
        console.log('hours: ' + hours);
        console.log('minutes: ' + minutes);
        console.log('seconds: ' + seconds);
        console.log('milliseconds: ' + milliseconds);

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