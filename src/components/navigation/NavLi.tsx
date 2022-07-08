import React, { createElement, MouseEvent } from "react"
import * as Style from './NavLi.style';
import {IconType} from "react-icons";

const NavLi = ({ changelink, navTitle, icon } : { changelink : string, navTitle : string , icon : IconType }) => {
    const handleMouseIn = (e: MouseEvent<HTMLElement>) => {
        e.currentTarget.classList.add("hoverd")
    }

    const handleMouseOut = (e: MouseEvent<HTMLElement>) => {
        e.currentTarget.classList.remove("hoverd")
    }    
    return (
        <Style.NavLi  onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
            <Style.NavStyleLink to={`${changelink}`}>
                <Style.NavIcon>{ createElement(icon, {className :"icon-icon"})}</Style.NavIcon>
                <Style.NavTitle>{navTitle}</Style.NavTitle>
            </Style.NavStyleLink>
        </Style.NavLi>
    )
}

export default NavLi