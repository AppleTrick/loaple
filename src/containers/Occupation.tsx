// 점령전섬

import Card from "components/card/Card";
import { RootState } from "modules";
import { useSelector } from "react-redux";
import styled from "styled-components";

const OccupationDiv = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-gap: 30px;

    @media(min-width: 768px){
        grid-template-columns: repeat(2 , 1fr);
    }

`

const Occupation = () => {

    const procyonData = useSelector((state: RootState) => state.ProcyonCompossReducer); 
    const [slimeIslandDone, medeiaIslandDone] = [procyonData.slimeIsland.isDone, procyonData.medeiaIsland.isDone];

    return (
        <OccupationDiv>
            <Card scheduleName={"메데이아"} onoff={true} isDone={medeiaIslandDone} />
            <Card scheduleName={"슬라임섬"} onoff={true} isDone={slimeIslandDone}/>
        </OccupationDiv>
    )
}

export default Occupation;

/* 점령전 섬관련 코드 */