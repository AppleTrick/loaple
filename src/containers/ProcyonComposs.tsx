import Card from "components/card/Card"
import IslandCards from "components/islandCard/IslandCards"
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
    

    return (
        <ProcyonCompossDiv>
            <Card scheduleName={"카오스게이트"} />
            <Card scheduleName={"유령선"}/>
            <Card scheduleName={"필드보스"}/>
            <IslandCards/>
        </ProcyonCompossDiv>
    )
}

export default ProcyonComposs