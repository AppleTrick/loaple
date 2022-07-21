import styled from "styled-components"

export const NavContaioner = styled.div`
    position : relative;
    width: 100%;
    height : 100%;

   
`
export const Nav = styled.div<{open : boolean}>`
    position : fixed;
    width: ${(props) =>  (props.open ? "280px" : "60px")};
    height : 100%;
    background : var(--blue);
    transition: 0.5s;
    overflow: hidden;
`
export const NavUl = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`