import Card from "components/card/Card";
import { GetExpeditionList } from "hooks/Schedule/Schedule";
import styled from "styled-components";

const GridDiv = styled.div`
    display: grid;
    grid-gap: 16px;
    padding: 16px;

    @media(min-width: 768px){
        grid-template-columns: repeat(2 , 1fr);
    }

    @media(min-width: 960px){
        grid-template-columns: repeat(3 , 1fr);
    }

    @media(min-width: 1200px){
        grid-template-columns: repeat(4 , 1fr);
    }
`
// 안에 카드 한번더 만들어야될 수도 있음
// const InsideComponent = styled.div`
//     background-color: pink;
//     padding: 16px;
// `

const Expedition = () => {
    return (
        <GridDiv>
            {GetExpeditionList().map((e,i) => {
                return (
                    // <InsideComponent key={i}><h3>{e}</h3></InsideComponent>
                    <Card key={i} scheduleName={e} /> 
                )
            } )}
        </GridDiv>
    )
}

export default Expedition;