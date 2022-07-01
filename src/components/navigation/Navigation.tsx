import { Link } from "react-router-dom"
import styled from "styled-components";

const Nav = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    border: solid 2px;
`

const NavDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`




const Navigation = () => {
    return (
        <Nav>
            <NavDiv>
                <Link to="/main">일정관리</Link>
            </NavDiv>
            <NavDiv>
                <Link to="/information">정보</Link>
            </NavDiv>
            <NavDiv>
                <Link to="/tactics">택틱</Link>
            </NavDiv>
        </Nav>
    )
}

export default Navigation