import styled from "styled-components";
import { BiMenu } from 'react-icons/bi'
import { useDispatch } from "react-redux";
import { NaviToggle } from "modules/NaviActions";

const Toggle = styled.div`
    position: relative;
    top: 0;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.75em;
    cursor: pointer;
`

const MenuToggle = () => {
    const dispatch = useDispatch();

    const toggleNavi = () => {
        dispatch(NaviToggle());
    }

    return (
        <Toggle onClick={toggleNavi}>
            <BiMenu/>
       </Toggle>
    )
}

export default MenuToggle;