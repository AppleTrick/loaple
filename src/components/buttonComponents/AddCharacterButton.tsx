import styled from "styled-components";

const AddCharacterButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const AddButton = styled.div`
    
`

const AddCharacterButton = () => {
    return (
        <AddCharacterButtonDiv>
            <AddButton>
                추가버튼
            </AddButton>
        </AddCharacterButtonDiv>
        
    )
}

export default AddCharacterButton;