import { Link } from "react-router-dom"
import {AiFillHome , AiFillCalendar , AiFillInfoCircle, AiFillDownSquare} from "react-icons/ai"
import styled from "styled-components";
import React, { MouseEvent, useRef, useState } from "react";

const NavContaioner = styled.div`
    position : relative;
    width : 100%;
    height : 100%;
`

const Nav = styled.div`
    position : fixed;
    width : 300px;
    height : 100%;
    background : var(--blue);
    border-left: 10px solid var(--blue);
    transition: 0.5s;
    overflow: hidden;

    .active {
        width: 60px;
    }
`
const NavUl = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .active {
        
    }
`

const NavLi = styled.li`
    position: relative;
    width: 100%;
    border-top-left-radius : 30px;
    border-bottom-left-radius: 30px;

    &:nth-child(1){
        margin-bottom: 40px;
        pointer-events: none;
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
const NavStyleLink = styled(Link)`
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: var(--white);

    
`

const NavIcon = styled.span`
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

const NavTitle = styled.span`
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: normal;
` 

const Navigation = () => {
   const [isActive , setIsActive] = useState<boolean>(false);

    const NavRef = useRef<HTMLDivElement>(null);

    const handleMouseIn = (e: MouseEvent<HTMLElement>) => {
        e.currentTarget.classList.add("hoverd")
        
    }

    const handleMouseOut = (e: MouseEvent<HTMLElement>) => {
        e.currentTarget.classList.remove("hoverd")
    }    


    // toggle 버튼으로 isActive를 활성화 시켜줘야됨;
    return (
        <>
        <NavContaioner>
                <Nav ref={NavRef} className={`${isActive ? 'active' : ''}`}>
                <NavUl>
                    <NavLi>
                        <NavStyleLink to="/main">
                            <NavIcon><AiFillHome className="icon-icon"/></NavIcon>
                            <NavTitle>Loaple</NavTitle>
                        </NavStyleLink>
                    </NavLi>
                    <NavLi onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                        <NavStyleLink to="/main">
                            <NavIcon><AiFillCalendar className="icon-icon"/></NavIcon>
                            <NavTitle>일정관리</NavTitle> 
                        </NavStyleLink>
                    </NavLi>
                    <NavLi onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                        <NavStyleLink to="/information">
                            <NavIcon><AiFillInfoCircle className="icon-icon"/></NavIcon>
                            <NavTitle>정보</NavTitle>
                        </NavStyleLink>
                    </NavLi>
                    <NavLi  onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                        <NavStyleLink to="/tactics">
                            <NavIcon><AiFillDownSquare className="icon-icon"/></NavIcon>
                            <NavTitle>보스택틱</NavTitle>
                        </NavStyleLink>
                    </NavLi>
                </NavUl>
            </Nav>
        </NavContaioner>
        </>
    )
}

export default Navigation