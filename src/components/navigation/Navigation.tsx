import {AiFillHome , AiFillCalendar , AiFillInfoCircle, AiFillDownSquare} from "react-icons/ai"
import { useRef, useState } from "react";
import NavLi from "./NavLi";
import * as Style from "./Navigation.style";

const ACTIVE = "ACTIVE";

const Navigation = () => {
   const [isActive , setIsActive] = useState<boolean>(true);

    const NavRef = useRef<HTMLDivElement>(null);

    // toggle 버튼으로 isActive를 활성화 시켜줘야됨;
    return (
        <>
        <Style.NavContaioner>
            <Style.Nav ref={NavRef}>
                <Style.NavUl>
                    <NavLi icon={AiFillHome} changelink={`/main` } navTitle={ `로아플`} />
                    <NavLi icon={AiFillCalendar} changelink={`/main` } navTitle={ `일정관리`} />
                    <NavLi icon={AiFillInfoCircle} changelink={`/information` } navTitle={ `정보`} />
                    <NavLi icon={AiFillDownSquare} changelink={`/tactics` } navTitle={ `택틱`} />
                </Style.NavUl>
            </Style.Nav>
        </Style.NavContaioner>
        </>
    )
}


export default Navigation