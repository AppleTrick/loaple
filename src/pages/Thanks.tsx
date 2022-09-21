import TopBar from "containers/TopBar";
import { RootState } from "modules";
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
const Thanks = () => {
    const openValue = useSelector((state: RootState) => state.naviactions);

    return (
        <MainDiv open={openValue.open}>
            <TopBar />
            <h1>thank you for visit my page</h1>
            <p>방문해주셔서 감사합니다.</p>
            <p>아브렐슈드 서버에서 로스트아크를 재밌게 즐기고 있는 유저입니다.</p>
            <p>취업준비를 시작하면서 어떤 프로젝트를 만들까 고민중,</p>
            <p>제가 가장 잘 즐기고 필요하다고 생각하는 쉽게 이용하는 로스트아크 일정관리 앱을 만들게 되었습니다.</p>
            <p>부족한 점도 많고, 앞으로 추가되야될 점도 많지만 즐겁게 이용해주셨으면 싶습니다.</p>
        </MainDiv>
            
    )
}

export default Thanks;

// thanks to and, information