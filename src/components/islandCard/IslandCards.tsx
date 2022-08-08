import { fetchIsland, IslandsResponse } from "api/axios";
import Card from "components/card/Card";
import { useEffect, useState } from "react";
import IslandCard from "./IslandCard";
import styled from "styled-components";

const IslandCardsStyle = styled.div`
    &:hover{

    }
`

const IslandCardStyle = styled.div`
    position : absolute;
    width: inherit;
`

const IslandCards = () => {

    const [thisData, setData] = useState<IslandsResponse|null>(null);
    
    useEffect(() => {
        fetchIsland().then(res => setData(res));
    }, []);
    
    return (
        <IslandCardsStyle>
            <Card scheduleName="모험섬" time={thisData?.IslandDate.split(" ")[1]} />
            <IslandCardStyle>
                {thisData ? thisData.Island.map((e,i) => {
                    return <IslandCard key={i} Name={ e.Name} Reward={e.Reward} />
                }) : <h2>값이 존재하지 않습니다</h2>}
            </IslandCardStyle>
        </IslandCardsStyle>
    )
}

export default IslandCards;