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
`

interface InputBoxProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    propName: string
    value: string | number
    placeholder : string
}

const InputBox = ({ onChange, propName , value , placeholder} : InputBoxProps ) => {
    return (
        <>
            <InputBoxDiv>
                <InputBoxText>{ propName}</InputBoxText>
                <InputBoxInput
                    id="choseDungeonRestGage"
                    placeholder={placeholder} value={value}
                    onChange={onChange}
                />
            </InputBoxDiv>
        </>
    )
}

export default InputBox