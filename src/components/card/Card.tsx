import { getThisCardName, iconImage, isProCyonOrSchedule } from "hooks/Card/Card"
import { ChangExpedtionList } from "hooks/Schedule/Schedule"
import { IsDone_Weekly } from "modules/CharacterSchedule"
import { clickIsDone } from "modules/ProcyonCompossActions"
import { useDispatch } from "react-redux"
import styled, { css } from "styled-components"
import {AiOutlineCheck} from 'react-icons/ai'

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
    color: #000000;
`

const CardTimeDiv = styled.div`
    color: #000000;
    font-size: 1em;
    margin-top: 5px;
`


const CardDiv = styled.div<{ onoff: boolean, isDone: boolean }>`
height: 100%;

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
        return "#404040b0"
        
    } else {
        return "#C5ED8C";
    }
  }};
  padding: 30px;
  box-shadow: 0 7px 25px rgba(0,0,0,0.08);
  border: 1px solid;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  
    /* 컨텐츠가 오픈이고 완료하지않은 상태일 경우 hover 조절 */
  ${(props) => (props.onoff && !props.isDone && css`
    &:hover{
        ${CardNameDiv}{
            color: var(--white);
        }
        ${CardTimeDiv}{
            color: var(--white);
        } 
        background: #5b9010;
    }
  `)}
  
  /* 클릭 완료시 글씨 변화 */
  ${(props => (props.isDone && css`
    ${CardNameDiv}{
        color: white;
        opacity: 0.5;
    }
    ${CardTimeDiv}{
        color: white;
        opacity: 0.5;
    } 
  `))}
` 

const CardIconDiv = styled.img<{ isDone: boolean }>`
    opacity: ${(props) => {
        if (props.isDone) {
            return 0.5
        }else{
            return 1
        }
    }};
    width: 30px;
    height: 30px;
    margin: 15px;
`

const CheckDiv = styled.span`
    position: absolute;
    left: 40%;
    top : 10%;
    line-height: normal;
    display: flex;
`

const Card = ({ scheduleName, time, onoff = true, isDone = false }: CardItemProps) => {
    const dispatch = useDispatch(); 
    
    const onClick = () => {
        // 해당요일이 아니면 onoff 불가능
        if (onoff) {
            // 프로키온 컨텐츠
            if (isProCyonOrSchedule(scheduleName)) {
                dispatch(IsDone_Weekly({
                    propsName : ChangExpedtionList(scheduleName)
                }))
            // 그 이외 컨텐츠
            } else {
                dispatch(clickIsDone({
                    propName: getThisCardName(scheduleName)
                }))
            }
           
        }
    }

    return (
        <CardDiv onoff={onoff} onClick={onClick} isDone={isDone}>
            <div>
                <CardNameDiv>{scheduleName}</CardNameDiv>
                {onoff ? <CardTimeDiv>{time}</CardTimeDiv> : <CardTimeDiv>오늘은 일정이 없습니다</CardTimeDiv>}
            </div>
            {iconImage(scheduleName) === undefined ? "" : <CardIconDiv isDone={isDone} src={iconImage(scheduleName)} />}
            {isDone ?
                <CheckDiv>
                    <AiOutlineCheck fontSize={"5em"} color={"#c6000086"} />
                </CheckDiv>
            : ""}
        </CardDiv>
    )
}

export default Card