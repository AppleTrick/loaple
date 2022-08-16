import { getThisCardName } from "hooks/Card/Card"
import { clickIsDone } from "modules/ProcyonCompossActions"
import { useDispatch } from "react-redux"
import styled, { css } from "styled-components"
import icons from "../../assets/icon/icon.png"

type CardItemProps = {
    scheduleName: string
    time?: string
    onoff?: boolean
    isDone ?:boolean
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


const CardDiv = styled.div<{ onoff: boolean, isDone: boolean }>`
  opacity: ${(props) => {
    if (props.onoff) {
        return 1
    }else{
        return 0.5
    }
  }};
  position : relative;
  background: ${(props) => {
    if (props.isDone) {
        return "gray"
    } else {
        return "var(--white)";
    }
  }};
  padding: 30px;
  box-shadow: 0 7px 25px rgba(0,0,0,0.08);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  

  ${(props) => (props.onoff && !props.isDone && css`
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

const Card = ({ scheduleName, time, onoff = true, isDone = false }: CardItemProps) => {
    const dispatch = useDispatch(); 


    const onClick = () => {
        // 해당요일이 아니면 onoff 불가능
        if (onoff) {
            dispatch(clickIsDone({
                propName: getThisCardName(scheduleName)
            }))
        }
    }

    return (
        <CardDiv onoff={onoff} onClick={onClick} isDone={isDone}>
            <div>
                <CardNameDiv>{scheduleName}</CardNameDiv>
                {onoff ? <CardTimeDiv>{time}</CardTimeDiv> : <CardTimeDiv>오늘은 일정이 없습니다</CardTimeDiv>}
            </div>
            <CardIconDiv src={icons} />
        </CardDiv>
    )
}

export default Card