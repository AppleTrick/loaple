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
const InputBoxInputClick = styled.button`
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
interface OpenJobProps {
    openJobSelect: () => void
    JobName : string
}

const OpenJob = ({ openJobSelect , JobName } : OpenJobProps) => {
    return (
        <>
            <InputBoxDiv>
                <InputBoxText>직업</InputBoxText>
                {JobName !== "" ?
                    <InputBoxInputClick type="button" id="characterJob" onClick={openJobSelect}>{JobName}</InputBoxInputClick> 
                    : <InputBoxInputClick type="button" id="characterJob" onClick={openJobSelect}>직업을 선택해주세요</InputBoxInputClick>
                }
            </InputBoxDiv>
        </>
    )
}

export default OpenJob;