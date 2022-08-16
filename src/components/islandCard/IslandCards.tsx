import { fetchIsland, IslandsResponse } from "api/axios";
import Card from "components/card/Card";
import { useEffect, useState } from "react";
import IslandCard from "./IslandCard";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "modules";

const IslandCardStyle = styled.div`
    z-index: 10;
    visibility: hidden;
    position : absolute;
    width: inherit;
`

const IslandCardsStyle = styled.div`
    &:hover{
        ${IslandCardStyle}{
            visibility: visible;
        }
    }
`

const IslandCards = () => {

    const [thisData, setData] = useState<IslandsResponse | null>(null);
    const procyonData = useSelector((state: RootState) => state.ProcyonCompossReducer); 
    
    useEffect(() => {
        fetchIsland().then(res => setData(res));
    }, []);
    


    return (
        <IslandCardsStyle>
            <Card scheduleName="모험섬" time={thisData?.IslandDate.split(" ")[1]} isDone={procyonData.todayIsland.isDone} />
            <IslandCardStyle>
                {thisData ? thisData.Island.map((e,i) => {
                    return <IslandCard key={i} Name={ e.Name} Reward={e.Reward} />
                }) : <h2>값이 존재하지 않습니다</h2>}
            </IslandCardStyle>
        </IslandCardsStyle>
    )
}

export default IslandCards;