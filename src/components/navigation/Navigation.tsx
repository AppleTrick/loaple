import { Link } from "react-router-dom"
import './navigation.css'

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
            <div>
                <Link to="/testboard">테스트보드</Link>
            </div>
        </nav>
    )
}

export default Navigation