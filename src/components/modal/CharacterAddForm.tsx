import { AddsCharacter } from "modules/CharacterSchedule";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import InputBox from "./InputBox";
import JobSelect from "./JobSelect";
import OpenJob from "./OpenJob";


const FormBox = styled.div`
    width: 60%;
    text-align: left;
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
interface CharacterData {
    characterName: string
    characterJob: string
    characterLevel: number
    guardianRestGage: number | string
    choseDungeonRestGage : number | string
}
interface CharacterAddModalProps {
    onClose: () => void;
}


const CharacterAddForm = ({onClose} : CharacterAddModalProps) => {
    const dispatch = useDispatch();

    const checkTrue = () => {

        if (characterName == "") {
            alert("이름이 공백입니다.");
            return false;
        }
        if (characterJob == "") {
            alert("직업이 선택되지 않았습니다.");
            return false
        }
        if (typeof guardianRestGage == "string" && guardianRestGage.length == 0) {
            alert("가디언 휴식게이지에 0-5 사이의 숫자를 입력해주세요");
            return false
        }
        const NumguardianRestGage = Number(guardianRestGage);
        if (!(NumguardianRestGage <= 5 && NumguardianRestGage >= 0) || isNaN(NumguardianRestGage) ) {
            alert("가디언 휴식게이지에 0-5 사이의 숫자를 입력해주세요");
            return false
        }
        if (typeof choseDungeonRestGage == "string" && choseDungeonRestGage.length == 0) {
            alert("카오스던전 휴식 게이지에 0-5 사이의 숫자를 입력해주세요");
            return false
        }
        const NumchoseDungeonRestGage = Number(choseDungeonRestGage)
        if (!(NumchoseDungeonRestGage <= 5 && NumchoseDungeonRestGage >= 0) || isNaN(NumchoseDungeonRestGage) ) {
            alert("카오스던전 휴식 게이지에 0-5 사이의 숫자를 입력해주세요");
            return false
        }
        return true; 
    }

    const onSubmit = (e: FormEvent) => {
        if (checkTrue()) {
            console.log("케릭터 정보 추가하기");
            dispatch(AddsCharacter({
                CharacterName: characterData.characterName,
                Level: characterData.characterLevel,
                Job: characterData.characterJob,
                GaurdianRestGage : Number(characterData.guardianRestGage),
                ChaosDungeonRestGage : Number(characterData.choseDungeonRestGage)
            }));
            e.preventDefault();
            onClose();
        }
        e.preventDefault();
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

    const [openJob, setOpenJob] = useState(false);

    const openJobSelect = () => {
        setOpenJob(!openJob);
    }

    const setJob = (Name: string) => {
        setCharacterData({ ...characterData, ["characterJob"]: Name });        
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCharacterData({ ...characterData, [id] : value })
    }

    const { characterName, characterJob, characterLevel, guardianRestGage, choseDungeonRestGage } = characterData;

    return (
            <FormBox>
                <H2Box>케릭터 추가하기</H2Box>
                <form onSubmit={(e) => onSubmit(e)}>
                
                <InputBox onChange={onChange} propName={"이름"} InputValue={characterName} placeholder={"케릭터 이름을 입력해주세요"} ID={"characterName" } />
                    <OpenJob openJobSelect={openJobSelect} JobName={characterJob } />
                    {openJob ? <JobSelect close={openJobSelect} setJob={ setJob } /> : ""}
                    <InputBox onChange={onChange} propName={"레벨"} InputValue={characterLevel} placeholder={ "레벨을 입력해주세요"}  ID={"characterLevel" }/>
                    <InputBox onChange={onChange} propName={"가디언토벌 휴식게이지"} InputValue={guardianRestGage} placeholder={"가디언토벌 휴식게이지를 입력해주세요"}  ID={"guardianRestGage" }/>
                    <InputBox onChange={onChange} propName={"카던 휴식게이지"} InputValue={choseDungeonRestGage} placeholder={"카던 휴식게이지를 입력해주세요"}  ID={"choseDungeonRestGage" }/>
                    <ButtonBox>
                        <InputBoxButton type="submit">추가하기</InputBoxButton>
                        <InputBoxButton onClick={onClose}>나가기</InputBoxButton>
                    </ButtonBox>
                </form>
            </FormBox>
    )
}

export default CharacterAddForm;