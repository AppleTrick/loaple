import ModalPortal from "./ModalPortal";
import styled from "styled-components";
import CharacterAddModal from "./CharacterAddModal";
import { MouseEvent } from "react";

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    width: 35%;
    height: 75%;
    background-color: white;
`;


const Modal = ({ onClose }: ModalProps) => {

    const backgroundClose = (e: MouseEvent) => {
        if (e.target !== e.currentTarget) return;
        onClose();   
    }

    return (
        <>
            <ModalPortal>
                <Background onClick={(e)=>backgroundClose(e)}>
                    <ModalBox>
                        <CharacterAddModal onClose={onClose} />
                    </ModalBox>
                </Background>
            </ModalPortal>
        </>
    )
}

export default Modal;