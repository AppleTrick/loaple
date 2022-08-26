import styled from "styled-components";
import {AiOutlineCheck} from 'react-icons/ai'

const Wrapper = styled.div`
    border: 1px solid black;
    height: 200px;
    width: 400px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Check = styled.input<{restGage : number}>`
/* 
    appearance: none;
    -webkit-appearance: none;
    이 속성은 운영체제 및 브라우저에 기본적으로 설정되어 있는 테마를 기반으로 요소를 표현한다. 
    즉, 네이티브로 지원되는 모양들을 해제하거나 추가할때 이 속성을 이용할 수 있다.
*/
    appearance: none;
    -webkit-appearance: none;
    height: 80px;
    width: 80px;
    background-color: #d5d5d5;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;


    &:after{
        content: "A";
        font-weight: 900;
        font-size: 50px;
        color : white;
        display: none;
    }

    &:hover{
        background-color: #a5a5a5;
    }

    &:checked{
        background-color: #5bcd3e;
    }

    &:checked::after{
        display: block;
    }
    
       
`

const CheckboxButton = () => {
    return (
        <Wrapper>
            <Check type={"checkbox"} restGage={1} />
        </Wrapper>
    )
}

export default CheckboxButton;