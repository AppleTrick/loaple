import styled from "styled-components";
import { BiMenu } from 'react-icons/bi'
import { MouseEvent } from "react";

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
    const toggleClick = (e: MouseEvent<HTMLElement>) => {
        console.log("aa");
    }
    return (
        <Toggle onClick={toggleClick}>
            <BiMenu/>
       </Toggle>
    )
}

export default MenuToggle;