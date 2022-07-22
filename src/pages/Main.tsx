import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "modules";
import TopBar from "containers/TopBar";
import ProcyonComposs from "containers/ProcyonComposs";

const MainDiv = styled.div<{open : boolean}>`
    position: absolute;
    width: calc(${(props) => (props.open ? "100% - 300px" : "100% - 80px")});
    left: ${(props) => (props.open ? "300px" : "80px")};
    min-height: 100vh;
    background: var(--white);
    transition: 0.5s;
`



const Main = () => {
    const openValue = useSelector((state: RootState) => state.naviactions);

    return (
        <>
            <MainDiv open={openValue.open}>
                <TopBar />
                <ProcyonComposs/>
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