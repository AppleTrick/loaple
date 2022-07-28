// 점령전섬

import Card from "components/card/Card";
import styled from "styled-components";

const OccupationDiv = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 30px;
`

const Occupation = () => {
    return (
        <OccupationDiv>
            <Card scheduleName={"메데이아"} />
            <Card scheduleName={"슬라임섬"}/>
        </OccupationDiv>
    )
}

export default Occupation;

/* 점령전 섬관련 코드 */