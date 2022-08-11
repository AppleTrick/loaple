import Card from "components/card/Card"
import IslandCards from "components/islandCard/IslandCards"
import { procyonDate, procyonHour } from "hooks/Date/Date"
import styled from "styled-components"

const ProcyonCompossDiv = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 30px;
`

const ProcyonComposs = () => {

    const { chaosGate, fieldBoss, ghostShip } = procyonDate();
    const hour = procyonHour();

    return (
        <ProcyonCompossDiv>
            <Card scheduleName={"카오스게이트"} onoff={chaosGate} time={hour} />
            <Card scheduleName={"유령선"} onoff={ ghostShip } time={hour}/>
            <Card scheduleName={"필드보스"} onoff={ fieldBoss} time={hour}/>
            <IslandCards/>
        </ProcyonCompossDiv>
    )
}

export default ProcyonComposs