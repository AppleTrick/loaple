import { ChangeEvent } from "react"
import styled from "styled-components"

const InputBoxDiv = styled.div`
margin-bottom: 20px;
`
const InputBoxText = styled.span`
font-size: 16px;
margin-bottom: 5px;
display: inline-block;
color: #607db8;
letter-spacing: 1px;
`
const InputBoxInput = styled.input`
width: 100%;
padding: 10px 20px;
outline: none;
font-weight: 400;
border: 1px solid #607d8b;
font-size: 16px;
letter-spacing: 1px;
color: #607d8b;
background: transparent;
border-radius: 30px;
`

interface InputBoxProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    propName: string
    InputValue: string | number
    placeholder: string
    ID : string
}

const InputBox = ({ onChange, propName , InputValue , placeholder , ID} : InputBoxProps ) => {
    return (
        <>
            <InputBoxDiv>
                <InputBoxText>{ propName}</InputBoxText>
                <InputBoxInput
                    id={ID}
                    placeholder={placeholder} value={InputValue}
                    onChange={onChange}
                />
            </InputBoxDiv>
        </>
    )
}

export default InputBox