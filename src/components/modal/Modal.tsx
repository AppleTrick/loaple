import ModalPortal from "./ModalPortal";
import styled from "styled-components";
import CharacterAddModal from "./CharacterAddModal";

type ModalProps = {
    onClose: () => void;
}

const Background = styled.div`
    z-index: 999; /* 의문이 들었던 부분 */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    background-color: #00000033;
`;

const ModalBox = styled.div`
  width: 25rem;
  background-color: white;
`;



const Modal = ({ onClose }: ModalProps) => {

    return (
        <>
            <ModalPortal>
                <Background>
                    <ModalBox>
                        <CharacterAddModal onClose={onClose} />
                    </ModalBox>
                </Background>
            </ModalPortal>
        </>
    )
}

export default Modal;