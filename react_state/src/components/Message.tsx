// function with parameter in react 
import React, { useState } from "react";
interface EventMessage {
    message: string;
}

const Message: React.FC = () => {
    const [message, setMessage] = useState<EventMessage>({ message: "Welcome" });
    const handleGreet = (greet: string): void => {
        setMessage({ message: greet });
    }
    return (
        <>
            <h1> {message.message}</h1>
            <button onClick={() => { handleGreet("LIKE") }} > LIKE </button>
            <button onClick={() => { handleGreet("COMMET") }} > COMMENT </button>
            <button onClick={() => { handleGreet("SUBSCRIBE") }}> SUBSCRIBE </button>
        </>
    );

}

export default Message;