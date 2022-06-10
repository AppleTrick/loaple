import { useState, useRef, useEffect } from 'react'
import Tr from 'components/Tr/Tr';

const TestBoard = () => {
    const [info, setInfo] = useState<userData[]>([]);
    const [selected, setSelected] = useState<userData>();
    const [modalOn, setModalOn] = useState<boolean>(false);
    
    const nextId = useRef(11);

    useEffect(() => {
         // 더미데이터 셋팅
        setInfo(
            [
                { id: "01", name: "박", email: "naver", phone: "010-1234-5678" },
                { id: "02", name: "이", email: "kakao", phone: "010-1234-5678" },
                { id: "03", name: "이", email: "kakao", phone: "010-1234-5678" },
                { id: "04", name: "이", email: "kakao", phone: "010-1234-5678" },
                { id: "05", name: "이", email: "kakao", phone: "010-1234-5678" }
            ]
        );
    }, []);

   
    
    
    // 데이터 추가 or 수정
    const handleSave = (data : userData) : void => {
        if (data.id) { 
            setInfo(
                info.map((row) => data.id === row.id ? {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    phone : data.phone
                } : row)
            )
        }

        // 일치하는 데이터가 없을 경우 내용내용 추가
        setInfo([...info, {
            id: data.id,
            name: data.name,
            email: data.email,
            phone: data.phone
        }]);
        nextId.current += 1;
    }

    // 데이터 삭제
    const handleRemove = (id : string) => {
        setInfo((info) => info.filter((item) => item.id !== id));
    }

    const handleEdit = (item : userData) => {
        setModalOn(true);
        const selectedData : userData = {
            id: item.id,
            name: item.name,
            email: item.email,
            phone: item.phone
        }

        console.log(selectedData);
        setSelected(selectedData);
    }

    const handleCancel = () => {
        setModalOn(false)
    }

    const handleSubmit = (item : userData) => {
        console.log(item);
        handleSave(item);
        setModalOn(false);
    }
    
    // 데이터 수정

    return (
        <>
            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>케릭터이름</th>
                                <th>레벨</th>
                                <th>일일컨텐츠</th>
                                <th>카오스던전</th>
                                <th>카오스던전휴식게이지</th>
                                <th>가디언토벌</th>
                                <th>가디언토벌휴식게이지</th>
                                <th>일일에포나</th>
                                <th>일일에포나 휴식게이지</th>
                                <th>주간컨텐츠</th>
                                <th>주간에포나1</th>
                                <th>주간에포나2</th>
                                <th>주간에포나3</th>
                            </tr>
                        </thead>
                        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit}/>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TestBoard;