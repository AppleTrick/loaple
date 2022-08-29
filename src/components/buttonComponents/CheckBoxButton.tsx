import styled from "styled-components";
import {AiOutlineCheck} from 'react-icons/ai'
import {useState } from "react";

// const Wrapper = styled.div`
//     border: 1px solid black;
//     height: 200px;
//     width: 400px;
//     margin: auto;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
// `

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
    font-size: 1.75em;
`

const CheckboxButton = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isRestGage, setIsRestGage] = useState<number>(0);
    const onClick = () => {
        setIsChecked(!isChecked);
    }

    //

    return (
        <Check isChecked={isChecked} onClick={onClick} >
            <ButtonIcon>
                {isChecked ? <AiOutlineCheck fontSize={"1em"} /> : `${isRestGage}`}                
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