import styled from "styled-components";
import {AiOutlineCheck} from 'react-icons/ai'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IsDone_Toggle } from "modules/CharacterSchedule";

const Check = styled.div<{isChecked : boolean}>`
    height: 30px;
    width: 30px;
    background-color: ${(props) => props.isChecked ? "#5bcd3e" : "#d5d5d5"};
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;

    &:hover{
        background-color: ${(props) => props.isChecked ? "#5bcd3e" : "#a5a5a5"};
    }       
`
const ButtonIcon = styled.span`
    font-size: 1em;
`

type CheckBoxButtonProps = {
    isDone: boolean
    ItemName : string
    RestGage?: number
    ID : number
}

const CheckboxButton = ({isDone , RestGage, ItemName,ID} : CheckBoxButtonProps) => {
    const [isRestGage] = useState<undefined | number>(RestGage);

    const dispatch = useDispatch();
    
    const onClick = () => {
        dispatch(IsDone_Toggle(
            {
                IsDone: !isDone,
                ItemName: ItemName,
                ID : ID
            }
        ))
    }

    return (
        <Check isChecked={isDone} onClick={onClick} >
            <ButtonIcon>
                {isDone ? <AiOutlineCheck fontSize={"2em"} /> : isRestGage !== undefined ? `${isRestGage}` : ""}                
            </ButtonIcon>
        </Check>      
    )
}

export default CheckboxButton;

/* 
    appearance: none;
    -webkit-appearance: none;
    이 속성은 운영체제 및 브라우저에 기본적으로 설정되어 있는 테마를 기반으로 요소를 표현한다. 
    즉, 네이티브로 지원되는 모양들을 해제하거나 추가할때 이 속성을 이용할 수 있다.
*/