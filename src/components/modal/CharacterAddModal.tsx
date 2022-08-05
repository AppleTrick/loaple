import { ChangeEvent, FormEvent, useState } from "react";

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

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(characterData);
        // dispatch 시켜서 데이터 추가 시켜줄 redux 가 필요함

        // 모달 창 종료
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
            <form onSubmit={onSubmit}>
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
                <button onClick={onClose}>취소</button>
            </form>
        </>
    )
}

export default CharacterAddModal;