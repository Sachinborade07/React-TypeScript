import { useNavigate } from "react-router-dom";
import About from "./About";

const HOME: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>This is HOME </div>
            <button onClick={() => navigate('/about')}> ABOUT </button>
        </>

    )
}

export default HOME;