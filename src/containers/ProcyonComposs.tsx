import Card from "components/card/Card"
import IslandCards from "components/islandCard/IslandCards"
import { procyonHour } from "hooks/Date/Date"
import { RootState } from "modules"
import { useSelector } from "react-redux"
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
    const procyonData = useSelector((state: RootState) => state.ProcyonCompossReducer); 
    const [chaosGate, fieldBoss, ghostShip ] = [procyonData.chaosGate.showing , procyonData.fieldBoss.showing, procyonData.ghostShip.showing]
    const [chaosGateDone, fieldBossDone, ghostShipDone ] = [procyonData.chaosGate.isDone , procyonData.fieldBoss.isDone, procyonData.ghostShip.isDone]
    const hour = procyonHour();

    return (
        <ProcyonCompossDiv>
            <Card scheduleName={"카오스게이트"} onoff={chaosGate} time={hour} isDone={chaosGateDone } />
            <Card scheduleName={"유령선"} onoff={ ghostShip } time={hour} isDone={ ghostShipDone}/>
            <Card scheduleName={"필드보스"} onoff={ fieldBoss} time={hour} isDone={fieldBossDone }/>
            <IslandCards/>
        </ProcyonCompossDiv>
    )
}

export default ProcyonComposs