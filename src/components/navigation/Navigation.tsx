import {AiFillHome , AiFillCalendar , AiFillInfoCircle, AiFillDownSquare} from "react-icons/ai"
import NavLi from "./NavLi";
import * as Style from "./Navigation.style";
import { useSelector } from "react-redux";
import { RootState } from "modules";


const Navigation = () => {  
    const openValue = useSelector((state: RootState) => state.naviactions);

    return (
        <>
            <Style.NavContaioner>
                <Style.Nav open={openValue.open}>
                    <Style.NavUl>
                        <NavLi icon={AiFillHome} changelink={`/main` } navTitle={ `로아플`} />
                        <NavLi icon={AiFillCalendar} changelink={`/main` } navTitle={ `일정관리`} />
                        <NavLi icon={AiFillInfoCircle} changelink={`/information` } navTitle={ `정보가지고오기`} />
                        <NavLi icon={AiFillDownSquare} changelink={`/thanks` } navTitle={ `감사합니다`} />
                    </Style.NavUl>
                </Style.Nav>
            </Style.NavContaioner>
        </>
    )
}


export default Navigation