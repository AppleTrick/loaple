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
`

const IslandCardsStyle = styled.div`
    width: 100%;
    
    &:hover{
        ${IslandCardStyle}{
            visibility: visible;
        }
    }
`

const IslandCards = () => {

    const [thisData, setData] = useState<IslandsResponse | undefined>();
    const procyonData = useSelector((state: RootState) => state.ProcyonCompossReducer); 
    
    useEffect(() => {
        fetchIsland().then(setData);
    }, []);
    

``
    return (
        <IslandCardsStyle>
            <Card scheduleName="모험섬" time={thisData?.IslandDate.split(" ")[1]} isDone={procyonData.todayIsland.isDone} onoff={true} />
            <IslandCardStyle>
                {thisData?.Island.map((e,i) => (<IslandCard key={i} Name={ e.Name} Reward={e.Reward} />
                 )) ?? <h2>값이 존재하지 않습니다</h2>}
            </IslandCardStyle>
        </IslandCardsStyle>
    )
}

export default IslandCards;