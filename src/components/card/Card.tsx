import styled, { css } from "styled-components"
import icons from "../../assets/icon/icon.png"

type CardItemProps = {
    scheduleName: string
    time?: string
    onoff? : boolean
}

const CardNameDiv = styled.div`
    position: relative;
    font-weight: 500;
    font-size: 1.5em;
    color: var(--blue);
`
const CardTimeDiv = styled.div`
    color: var(--blue);
    font-size: 1em;
    margin-top: 5px;
`

const CardDiv = styled.div<{ onoff: boolean }>`
  opacity: ${(props) => (props.onoff ? 1 : 0.5)};
  position : relative;
  background: var(--white);
  padding: 30px;
  box-shadow: 0 7px 25px rgba(0,0,0,0.08);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  

  ${(props) => (props.onoff && css`
    &:hover{
        ${CardNameDiv}{
            color: var(--white);
        }
        ${CardTimeDiv}{
            color: var(--white);
        } 
    }
    &:hover {
        background: var(--blue);
    }
  `)}  
` 

const CardIconDiv = styled.img`
    width: 30px;
    height: 30px;
    margin: 15px;
`

const Card = ({scheduleName, time , onoff = true } : CardItemProps) => {
    return (
        <CardDiv onoff={onoff}>
            <div>
                <CardNameDiv>{scheduleName}</CardNameDiv>
                {onoff ? <CardTimeDiv>{time}</CardTimeDiv> : <CardTimeDiv>오늘은 일정이 없습니다</CardTimeDiv>}
            </div>
            <CardIconDiv src={icons} />
        </CardDiv>
    )
}

export default Card