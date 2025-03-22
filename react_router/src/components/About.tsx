import { useNavigate } from "react-router-dom"

const About: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>THIS IS ABOUT</div>
            <button onClick={() => navigate('/')}> HOME </button>
        </>
    )
}

export default About