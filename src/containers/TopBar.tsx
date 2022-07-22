import styled from "styled-components";
import MenuToggle from "components/toggle/MenuToggle";

const TopBarStyle = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`

const TopBar = () => {
    return (
        <TopBarStyle>
            <MenuToggle/>
        </TopBarStyle>
    )
}

export default TopBar;