import { CharacterSchedule, Delete_Character, Update_Character } from "modules/CharacterSchedule";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import ModalPortal from "./ModalPortal";

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

type ModalProps = {
    onClose: () => void;
    getCharacterData: CharacterSchedule;
}

type CharacterData = {
    characterName: string
    characterJob: string
    characterLevel: number
    guardianRestGage: number
    choseDungeonRestGage : number
}

const CharacterUpdateModal = ({ onClose , getCharacterData }: ModalProps) => {
    
    const dispatch = useDispatch();

    const onSubmit = (e: FormEvent) => {
        console.log("케릭터 정보 수정하기");
        dispatch(Update_Character({
            ID : getCharacterData.ID,
            CharacterName: characterData.characterName,
            Level: characterData.characterLevel,
            Job: characterData.characterJob,
            GaurdianRestGage : characterData.guardianRestGage,
            ChaosDungeonRestGage : characterData.choseDungeonRestGage
        }));
        e.preventDefault();
        onClose();
    }

    const onDelete = () => {
        console.log("케릭터 정보 삭제하기")
        dispatch(Delete_Character({
            ID : getCharacterData.ID,
        }));
        onClose();
    }


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCharacterData({ ...characterData, [id] : value })
    }

    const [characterData, setCharacterData] = useState<CharacterData>(
        {
            characterName: getCharacterData.CharacterInform.CharacterName,
            characterJob: getCharacterData.CharacterInform.Job,
            characterLevel: getCharacterData.CharacterInform.Level,
            guardianRestGage: getCharacterData.Daily.Gaurdian.RestGage,
            choseDungeonRestGage : getCharacterData.Daily.ChaosDungeon.RestGage
        }
    );

    const { characterName, characterJob, characterLevel, guardianRestGage, choseDungeonRestGage } = characterData;

    return (
        <ModalPortal>
            <Background>
                <ModalBox>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <h3>이름</h3>
                        <input 
                            id="characterName"
                            placeholder="케릭터 이름을 입력해주세요." value={characterName}
                            onChange={onChange}
                        />
                            <h3>직업</h3>
                        <input
                            id="characterJob"
                            placeholder="케릭터 직업을 입력해주세요." value={characterJob}
                            onChange={onChange}
                        />
                            <h3>레벨</h3>
                        <input
                            id="characterLevel"
                            placeholder="케릭터 레벨을 입력해주세요." value={characterLevel}
                            onChange={onChange}
                        />
                            <h3>카던 휴게</h3>
                        <input
                            id="guardianRestGage"
                            placeholder="가디언 휴식게이지를 입력해주세요." value={guardianRestGage}
                            onChange={onChange}
                        />
                            <h3>가디언토벌 휴게</h3>
                        <input
                            id="choseDungeonRestGage"
                            placeholder="카오스던전 휴식게이지를 입력해주세요." value={choseDungeonRestGage}
                            onChange={onChange}
                        />
                        <button type="submit">등록</button>
                        <button type="button" onClick={onDelete}>삭제하기</button>
                        <button onClick={onClose}>나가기</button>
                    </form>
                </ModalBox>
            </Background>
        </ModalPortal>
    )
}

export default CharacterUpdateModal