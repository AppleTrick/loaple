import styled from "styled-components";
import MenuToggle from "components/toggle/MenuToggle";
const MainDiv = styled.div`
    position: absolute;
    width: 300px;
    left: 300px;
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
    return (
        <>
            <MainDiv>
                <TopBar>
                   <MenuToggle/>
                </TopBar>
            </MainDiv>
        </>
    )
}

export default Main;