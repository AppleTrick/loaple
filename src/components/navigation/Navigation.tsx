import { Link } from "react-router-dom"


// nav {
//     width: 100%;
//     height: 60px;
//     display: flex;
//     border: solid 2px;
  
//   }
  
//   nav > div {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

const Navigation = () => {
    return (
        <nav>
            <div>
                <Link to="/main">일정관리</Link>
            </div>
            <div>
                <Link to="/information">정보</Link>
            </div>
            <div>
                <Link to="/tactics">택틱</Link>
            </div>
        </nav>
    )
}

export default Navigation