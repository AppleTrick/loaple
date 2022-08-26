// 모험섬 카드 항목

type IslandCardProps = {
    Name: string
    Reward : string
}

import styled from "styled-components"

const IslandCardDiv = styled.div`
    width: 200px;
    margin-top: 10px;
    background: var(--white);
    padding: 20px;
    box-shadow: 0 7px 25px rgba(0,0,0,0.08);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;

    &:hover {
    background: var(--blue);
    }

    &:hover div{
    color: var(--white);
    }
` 

const CardNameDiv = styled.div`
    position: relative;
    font-weight: 500;
    font-size: 1em;
    color: var(--blue);
`

const IslandCard = ({Name , Reward} : IslandCardProps) => {
    return (
        <IslandCardDiv>
            <div><CardNameDiv>{Name}</CardNameDiv></div>
            <div>{Reward}</div>
        </IslandCardDiv>
    )
}

export default IslandCard;