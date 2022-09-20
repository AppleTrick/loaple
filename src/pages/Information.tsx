import TopBar from "containers/TopBar";
import { RootState } from "modules";
import { Set_Schedule_Data } from "modules/CharacterSchedule";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MainDiv = styled.div<{ open: boolean }>`
    position: absolute;
    width: calc(${(props) => (props.open ? "100% - 300px" : "100% - 80px")});
    left: ${(props) => (props.open ? "300px" : "80px")};
    min-height: 100vh;
    background: var(--white);
    transition: 0.5s;
`

const GetDataButton = styled.button`
    width: 200px;
    height: 120px;
`
const PasteDataInput = styled.textarea`
    display: block;
    width: 90%;
    height: 240px;
`

const SetDataButton = styled.button`
    width: 100px;
`

const Information = () => {

    const openValue = useSelector((state: RootState) => state.naviactions);
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }
    
    const getData = () => {
        copyText(localStorage.getItem('scheduleData') || "");
    }

    const setData = () => {
        // 잘못된 값 검사하기 기능이 추가 되어야됨
        // JSON.parse(text)에 대한 데이터 검사가 이뤄져야됨;
        
        dispatch(Set_Schedule_Data(
            {
                data: JSON.parse(text)
            }
        ))
        console.log("데이터 적용 완료");
        setText("");
    }

    const copyText = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
          } catch (e) {
            alert('복사에 실패하였습니다');
          }
    }

    return (
        <MainDiv open={openValue.open}>
            <TopBar />
            <div>
                <h1>데이터 복사하기</h1>
                <GetDataButton onClick={getData}>데이터 복사하기</GetDataButton>
            </div>

            <div>
                <h1>데이터 가져오기</h1>
                <PasteDataInput onChange={(e) => handleChange(e)} value={text } />
                <SetDataButton onClick={()=>setData()}>데이터 적용하기</SetDataButton>
            </div>
        </MainDiv>
    )
}

export default Information;

