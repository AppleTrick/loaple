import { CharacterSchedule, Delete_Character, Update_Character } from "modules/CharacterSchedule";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import ModalPortal from "./ModalPortal";

const Background = styled.div`
    z-index: 998; /* 의문이 들었던 부분 */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
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

const FormBox = styled.div`
    width: 60%;
`

const InputBox = styled.div`
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

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const InputBoxButton = styled.button`
    width: 100%;
    padding: 10px 20px;
    outline: none;
    border: 1px solid #607d8b;
    font-size: 10px;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 30px;
    
    &:hover{
        cursor: pointer;
    }
`

const H2Box = styled.h2`
    font-size: 1.5em;
    font-weight: 600;
    display: inline-block;
`

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

    const backgroundClose = (e: MouseEvent) => {
        if (e.target !== e.currentTarget) return;
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
            <Background onClick={(e)=>backgroundClose(e)}>
                <ModalBox>
                    <FormBox>
                        <H2Box>케릭터 정보 수정하기</H2Box>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <InputBox>
                                <InputBoxText>이름</InputBoxText>
                                <InputBoxInput 
                                    id="characterName"
                                    placeholder="케릭터 이름을 입력해주세요." value={characterName}
                                    onChange={onChange}
                                />
                            </InputBox>

                            <InputBox>
                                <InputBoxText>직업</InputBoxText>
                                <InputBoxInput
                                    id="characterJob"
                                    placeholder="케릭터 직업을 입력해주세요." value={characterJob}
                                    onChange={onChange}
                                />
                            </InputBox>
                           
                            <InputBox>
                                <InputBoxText>레벨</InputBoxText>
                                <InputBoxInput
                                    id="characterLevel"
                                    placeholder="케릭터 레벨을 입력해주세요." value={characterLevel}
                                    onChange={onChange}
                                />
                            </InputBox>

                            <InputBox>
                                <InputBoxText>카던 휴식게이지</InputBoxText>
                                <InputBoxInput
                                    id="guardianRestGage"
                                    placeholder="가디언 휴식게이지를 입력해주세요." value={guardianRestGage}
                                    onChange={onChange}
                                />
                            </InputBox>
                           
                            <InputBox>
                                <InputBoxText>가디언토벌 휴식게이지</InputBoxText>
                                <InputBoxInput
                                    id="choseDungeonRestGage"
                                    placeholder="카오스던전 휴식게이지를 입력해주세요." value={choseDungeonRestGage}
                                    onChange={onChange}
                                />
                            </InputBox>
                            
                            <ButtonBox>
                                <InputBoxButton type="submit">수정하기</InputBoxButton>
                                <InputBoxButton type="button" onClick={onDelete}>삭제하기</InputBoxButton>
                                <InputBoxButton onClick={onClose}>나가기</InputBoxButton>
                            </ButtonBox>
                        </form>
                    </FormBox>
                </ModalBox>
            </Background>
        </ModalPortal>
    )
}

export default CharacterUpdateModal