import styled from "styled-components";
import MenuToggle from "components/toggle/MenuToggle";
import { useSelector } from "react-redux";
import { RootState } from "modules";
const MainDiv = styled.div<{open : boolean}>`
    position: absolute;
    width: calc(${(props) => (props.open ? "100% - 300px" : "100% - 80px")});
    left: ${(props) => (props.open ? "300px" : "80px")};
    min-height: 100vh;
    background: var(--white);
    transition: 0.5s;
`

const TopBar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`



const Main = () => {
    const openValue = useSelector((state: RootState) => state.naviactions);

    return (
        <>
            <MainDiv open={openValue.open}>
                <TopBar>
                    {/* 세팅 버튼 추가해서 설정항목 만들기 */}
                   <MenuToggle/>
                </TopBar>
                {/* 이제 여기에 카드 보드 형식의 프로키온의 나침반 카드 형식으로생성해주기 */}
                <h1>
                    프로키온의 나침반
                </h1>

                <h1>
                    캐릭별
                </h1>

                <h1>
                    원정대별
                </h1>
                <h2>슬라임섬 , 메데이아  카드형식으로 구현</h2>

            </MainDiv>
        </>
    )
}

export default Main;