import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "pages/Main";
import Information from "pages/Information";
import Tactics from "pages/Tactics";
import Navigation from "components/navigation/Navigation";

// 라우팅 부분

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path="/main/*" element={ <Main/>}/>
                    <Route path="/information/*" element={ <Information/>}/>
                    <Route path="/tactics/*" element={<Tactics />} />
                    <Route path="/" element={<Navigate replace to="/main/*"/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter