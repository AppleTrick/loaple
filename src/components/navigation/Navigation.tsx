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
                        <NavLi icon={AiFillInfoCircle} changelink={`/information` } navTitle={ `정보`} />
                        <NavLi icon={AiFillDownSquare} changelink={`/tactics` } navTitle={ `택틱`} />
                    </Style.NavUl>
                </Style.Nav>
            </Style.NavContaioner>
        </>
    )
}


export default Navigation