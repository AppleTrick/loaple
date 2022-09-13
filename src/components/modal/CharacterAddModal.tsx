import { AddsCharacter } from "modules/CharacterSchedule";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";


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
    cursor: pointer;
`

const H2Box = styled.h2`
    font-size: 1.5em;
    font-weight: 600;
    display: inline-block;
`
type CharacterData = {
    characterName: string
    characterJob: string
    characterLevel: number
    guardianRestGage: number
    choseDungeonRestGage : number
}

type CharacterAddModalProps = {
    onClose: () => void;
}


const CharacterAddModal = ({onClose} : CharacterAddModalProps) => {
    const dispatch = useDispatch();
    const onSubmit = (e: FormEvent) => {
        console.log("케릭터 정보 추가하기");
        dispatch(AddsCharacter({
            CharacterName: characterData.characterName,
            Level: characterData.characterLevel,
            Job: characterData.characterJob,
            GaurdianRestGage : characterData.guardianRestGage,
            ChaosDungeonRestGage : characterData.choseDungeonRestGage
        }));

        e.preventDefault();
        onClose();
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCharacterData({ ...characterData, [id] : value })
    }

    const [characterData, setCharacterData] = useState<CharacterData>(
        {
            characterName: "",
            characterJob: "",
            characterLevel: 0,
            guardianRestGage: 0,
            choseDungeonRestGage : 0
        }
    );

    const { characterName, characterJob, characterLevel, guardianRestGage, choseDungeonRestGage } = characterData;

    return (
        <>
            <FormBox>
                <H2Box>케릭터 추가하기</H2Box>
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
                        <InputBoxButton type="submit">추가하기</InputBoxButton>
                        <InputBoxButton onClick={onClose}>나가기</InputBoxButton>
                    </ButtonBox>
                </form>
            </FormBox>
        </>
    )
}

export default CharacterAddModal;