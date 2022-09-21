import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavLi = styled.li`
    position: relative;
    width: 100%;
    border-top-left-radius : 30px;
    border-bottom-left-radius: 30px;

    &:nth-child(1){
        margin-bottom: 40px;
        /* pointer-events: none; 이벤트 없애기 */
    }

    &:hover a {
        color: var(--blue);
    }

    &:hover{
        background: var(--white);

    }

    &:hover a::before{
        content: '';
        position: absolute;
        right: 0;
        top : -50px;
        width: 50px;
        height: 50px;
        background: transparent;
        border-radius: 50%;
        box-shadow: 35px 35px 0 10px var(--white);
        pointer-events: none;
    }
    &:hover a::after{
        content: '';
        position: absolute;
        right: 0;
        bottom : -50px;
        width: 50px;
        height: 50px;
        background: transparent;
        border-radius: 50%;
        box-shadow: 35px -35px 0 10px var(--white);
        pointer-events: none;
    }
`

// Link 는 a 태그 속성임
export const NavStyleLink = styled(Link)`
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: var(--white);

    
`

export const NavIcon = styled.span`
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 70px;
    text-align: center;

    .icon-icon {
        font-size: 1.75em;
    }
`

export const NavTitle = styled.span`
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: normal;
` 