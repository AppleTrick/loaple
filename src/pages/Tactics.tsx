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
const Tactics = () => {
    const openValue = useSelector((state: RootState) => state.naviactions);

    return (
        <MainDiv open={openValue.open}>
            <TopBar />
            <h1>thanks to and, information</h1>
        </MainDiv>
            
    )
}

export default Tactics;

// thanks to and, information