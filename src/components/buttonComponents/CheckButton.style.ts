import styled from "styled-components"

const checkButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

const CheckButtonCheckBox = styled.label<{ checked: boolean }>`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid ;
  background: ${({ checked }) => (checked ? `black` : `white`)};
  cursor: pointer;
`

const CheckButtonHiddenButton = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const checkButtonLabel = styled.label`
  margin-left: 10px;
  line-height: 16px;
  cursor: pointer;
`


export { checkButtonContainer, CheckButtonCheckBox, CheckButtonHiddenButton ,checkButtonLabel };